import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

async function main() {
  console.log("Seeding database via direct connection...");

  // Parse connection string
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not defined in .env");
  }

  // Example: mysql://root:password@localhost:3306/dbname
  const urlPattern = /mysql:\/\/([^:]+):([^@]*)@([^:]+):(\d+)\/(.+)/;
  const match = dbUrl.match(urlPattern);

  if (!match) {
    throw new Error("Invalid DATABASE_URL format");
  }

  const [_, user, password, host, port, database] = match;

  const connection = await mysql.createConnection({
    host,
    user,
    password,
    database,
    port: parseInt(port),
  });

  try {
    const adminEmail = "admin@zuaplace.com";
    const adminPassword = "adminpassword123";
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Check if exists
    const [rows]: any = await connection.execute(
      'SELECT id FROM User WHERE email = ?',
      [adminEmail]
    );

    if (rows.length === 0) {
      const id = `admin-${Date.now()}`;
      await connection.execute(
        'INSERT INTO User (id, email, username, password, role, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())',
        [id, adminEmail, 'admin', hashedPassword, 'ADMIN', 1]
      );
      console.log(`Admin user created: ${adminEmail}`);
    } else {
      console.log("Admin user already exists.");
    }
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await connection.end();
  }

  console.log("Seeding completed.");
}

main().catch(console.error);

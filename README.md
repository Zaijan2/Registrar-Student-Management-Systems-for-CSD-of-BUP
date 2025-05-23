# Registrar Student Management System  
### For Computer Studies Department of Bicol University Polangui

## 📌 Description

Our group proposes the development of a Registrar Management System specifically 
designed for the Computer Studies Department of Bicol University Polangui. This system aims 
to centralize and streamline the management of student-related information, class schedules, and 
personal records. By digitizing these processes, the system will help improve data organization, 
enhance communication between students and faculty, and support better decision-making within 
the department. The ultimate goal is to create a more efficient and transparent environment for 
academic management and student support.

---

## ⚙️ Key Functionalities

1. **Student Information Management**  
   - Stores and manages student personal data, course, and section assignments.
   
2. **Course and Subject Management**  
   - Maintains a list of degree programs and subject offerings.

3. **Class Scheduling Management**  
   - Handles subject schedules, classrooms, and faculty assignments.

4. **Enrollment Processing**  
   - Records student enrollment per semester, including subject and schedule links.

5. **Grade Management**  
   - Allows instructors to input and update student grades for each enrolled subject.

6. **User Role and Access Control**  
   - Defines and enforces roles (admin, faculty, student) with appropriate access permissions.

7. **Audit Trail Logging**  
   - Captures system activity such as data updates, deletions, and user actions for accountability.

---

## 👥 Stakeholders

- **Registrar’s Office Staff**: Manage enrollment, student records, and schedules.  
- **Department Chair**: Monitor enrollment data, assign faculty, and manage class offerings.  
- **Students**: View personal data, check enrollment status, schedules, and more.  
- **Faculty Members / Instructors**: View class schedules, student lists, and input grades.

---

## 🔄 Core Data Processes

- **Insert and Update Student Data**  
  - Adds or modifies personal information for each student.

- **Create and Manage Course Offerings**  
  - Adds new courses, assigns them to departments, and stores descriptions and credits.

- **Assign and Manage Instructors**  
  - Registers instructors and links them to their respective departments.

- **Schedule Classes**  
  - Links subjects with instructors, time slots, rooms, and days of the week.

- **Process Student Enrollment**  
  - Records what course a student is taking in each semester and their status (Enrolled, Dropped, Completed).

- **Track Enrollment History**  
  - Maintains historical data across semesters and years.

- **Record and Manage Grades**  
  - Stores student grades per subject, per semester, linked to enrollment or class schedule.

---

## 💻 Language
MySQL Workbench

---

## 🧑‍💻 Members with Roles

| Name                          | Role              |
|-------------------------------|-------------------|
| Zaijan M. Alvarado            | Project Lead      |
| Jon Matthew B. Mella          | Database Architect|
| Jaiden Nykluz Fermante        | SQL Developer     |
| Otelo P. Nobleza III          | SQL Developer     |
| Andrei Lloyd V. Sinfuego      | QA Tester         |
| Symon Cristoffer B. Cano      | QA Tester         |

---

## ⚙️ How to Restore and Run the System

### 🗄️ Step 1: Restore the Database Using MySQL Workbench (GUI Method)

1. **Open MySQL Workbench** and connect to your MySQL server.
2. Go to the **Server** menu on the top bar, then select  
   **Data Import**.
3. Under **Import Options**, select:
   - **"Import from Self-Contained File"**
   - Browse to the path:  
     ``` source/path/to/backup.sql ```
4. Under **Default Schema to be Imported To**, click **New...** and then enter erd(name of database):

5. Click **Start Import** (bottom right).

6. Wait until you see ✅** “Import completed successfully.”**

---

### ⚙️ Step 2: Connect Your Frontend (Optional)
If your system includes a frontend (like PHP, Python, or Java app):

Make sure your code is using the correct credentials:

Host:       localhost
User:       root
Password:   (your MySQL root password)
Database:   erd

If you’re testing manually or for SQL-only purposes, skip this step.

---

### ⚙️ Step 3: Testing and Validation (MySQL Workbench)
Run queries to validate your database:

-- View students
SELECT * FROM students;

-- Check enrollment history
SELECT * FROM enrollment;

-- Grades for a specific student
SELECT * FROM grades WHERE student_id = 1001;

### 🧠 Tips
**Make sure MySQL Server is running (you can check via Workbench or system services).**

**If no frontend is connected, you can manage and test everything inside MySQL Workbench directly.**

---


## 📈 Progress

-  **Phase 1**: 100 %  
-  **Phase 2**: 100 %  
-  **Phase 3**: 100 %  
-  **Phase 4**: 100 %  
-  **Phase 5**: 100 %  
-  **Phase 6**: 100 %



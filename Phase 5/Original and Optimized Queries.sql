-- Original Query #1
SELECT s.firstname, s.lastname, g.grade, g.remarks
FROM student s
JOIN grades g ON s.StudentID = g.StudentID
WHERE g.remarks = 'Failed';
    
EXPLAIN SELECT s.firstname, s.lastname, g.grade, g.remarks
FROM student s
JOIN grades g ON s.StudentID = g.StudentID
WHERE g.remarks = 'Failed';

-- Indexing
CREATE INDEX idx_remarks ON grades(remarks);

-- Optimized Query
EXPLAIN SELECT s.firstname, s.lastname, g.grade, g.remarks
FROM student s
JOIN grades g ON s.StudentID = g.StudentID
WHERE g.remarks = 'Failed';


-- Original Query #2
SELECT 
    s.StudentID, 
    CONCAT(s.firstname, ' ', s.lastname) AS StudentName,
    SUM(c.credits) AS TotalCredits
FROM 
    student s
JOIN 
    course c ON s.CourseID = c.CourseID
JOIN 
    enrollment e ON s.StudentID = e.StudentID
WHERE 
    e.status = 'Completed'
GROUP BY 
    s.StudentID
HAVING 
    SUM(c.credits) > 0
ORDER BY 
    TotalCredits DESC;
    
EXPLAIN SELECT 
    s.StudentID, 
    CONCAT(s.firstname, ' ', s.lastname) AS StudentName,
    SUM(c.credits) AS TotalCredits
FROM 
    student s
JOIN 
    course c ON s.CourseID = c.CourseID
JOIN 
    enrollment e ON s.StudentID = e.StudentID
WHERE 
    e.status = 'Completed'
GROUP BY 
    s.StudentID
HAVING 
    SUM(c.credits) > 0
ORDER BY 
    TotalCredits DESC;
    
-- Indexing
CREATE INDEX idx_student_courseID ON student(CourseID);
CREATE INDEX idx_enrollment_studentID ON enrollment(StudentID);
CREATE INDEX idx_enrollment_status ON enrollment(status);

-- Optimized Query
EXPLAIN SELECT 
    s.StudentID, 
    CONCAT(s.firstname, ' ', s.lastname) AS StudentName,
    SUM(c.credits) AS TotalCredits
FROM 
    student s
JOIN 
    course c ON s.CourseID = c.CourseID
JOIN 
    enrollment e ON s.StudentID = e.StudentID
WHERE 
    e.status = 'Completed'
GROUP BY 
    s.StudentID
HAVING 
    SUM(c.credits) > 0
ORDER BY 
    TotalCredits DESC;
    

-- Original Query #3
SELECT s.firstname, s.lastname, c.courseName, e.timestamp
FROM student s
JOIN enrollment e ON s.StudentID = e.StudentID
JOIN course c ON e.CourseID = c.CourseID
WHERE e.timestamp BETWEEN '2022-01-01' AND '2023-12-31';

EXPLAIN SELECT s.firstname, s.lastname, c.courseName, e.timestamp
FROM student s
JOIN enrollment e ON s.StudentID = e.StudentID
JOIN course c ON e.CourseID = c.CourseID
WHERE e.timestamp BETWEEN '2022-01-01' AND '2023-12-31';

-- Indexing
CREATE INDEX idx_enrollment_timestamp ON enrollment(timestamp);

-- Optimized Query
EXPLAIN SELECT s.firstname, s.lastname, c.courseName, e.timestamp
FROM student s
JOIN enrollment e ON s.StudentID = e.StudentID
JOIN course c ON e.CourseID = c.CourseID
WHERE e.timestamp BETWEEN '2022-01-01' AND '2023-12-31';
import * as ajax from "../../common/ajax";

export const getPageCount = (className, courseName, studentName) =>
  ajax.get("/teacher/student/course/page/count", {
    className: className,
    courseName: courseName,
    studentName: studentName
  });

export const getPage = (index, className, courseName, studentName) =>
  ajax.get("/teacher/student/course/page/" + index, {
    className: className,
    courseName: courseName,
    studentName: studentName
  });

export const pageSize = 15;

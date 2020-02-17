<template>
  <div class="student-course-wrap">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-fa fa-edit"></i> 学生选课信息
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <div class="query-form">
        <el-row :gutter="20">
          <el-col :offset="12" :span="3">
            <el-input
              @keyup.enter.native="query"
              placeholder="课程名"
              v-model="queryForm.courseName"
            />
          </el-col>
          <el-col :span="3">
            <el-input
              @keyup.enter.native="query"
              placeholder="学生名"
              v-model="queryForm.studentName"
            />
          </el-col>
          <el-col :span="3">
            <el-input
              @keyup.enter.native="query"
              placeholder="班级名"
              v-model="queryForm.className"
            />
          </el-col>
          <el-col :span="3">
            <el-button @click="query" icon="el-icon-search" type="primary"
              >搜索
            </el-button>
          </el-col>
        </el-row>
      </div>

      <div class="table">
        <el-table :data="tableData" stripe>
          <el-table-column label="学生名" prop="studentName" />
          <el-table-column label="课程名" prop="courseName" />
          <el-table-column label="学生班级" prop="className" />
          <el-table-column label="日常分" min-width="80px" prop="dailyScore" />
          <el-table-column label="期末分" prop="examScore"/>
          <el-table-column label="总分" prop="score"/>
        </el-table>
      </div>

      <el-row justify="center" type="flex" class="pagination">
        <el-pagination :current-page.sync="pageIndex" :page-size="pageSize" :total="pageSize * pageCount" @current-change="getPage" background layout="prev, pager, next">
        </el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as api from "../../api/teacher/studentCourse";

export default {
  name: "AdminStudentCourse",
  data() {
    return {
      queryForm: {
        className: "",
        courseName: "",
        studentName: ""
      },
      tableData: [],
      pageSize: api.pageSize,
      pageCount: 1,
      pageIndex: 1
    };
  },
  methods: {
    query() {
      api
        .getPageCount(
          this.queryForm.className,
          this.queryForm.courseName,
          this.queryForm.studentName
        )
        .then(res => {
          this.pageCount = res;
          this.pageIndex = 1;
          this.getPage(1);
        });
    },
    getPage(pageIndex) {
      api
        .getPage(
          pageIndex,
          this.queryForm.className,
          this.queryForm.courseName,
          this.queryForm.studentName
        )
        .then(res => {
          this.tableData = res;
        });
    }
  },
  created() {
    this.query();
  }
};
</script>

<style scoped></style>

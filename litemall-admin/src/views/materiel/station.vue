<template>
  <div class="app-container">

    <!-- 查询和其他操作 -->
    <div class="filter-container">
      <el-select class="filter-item" v-model="statusId" clearable placeholder="请选择状态">
        <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select class="filter-item" v-model="brandId" clearable placeholder="请选择实验室">
        <el-option v-for="item in brandList" :key="item.value" :label="item.name" :value="item.id" />
      </el-select>
      <!-- <el-input class="filter-item" style="width:200px;"  placeholder="输入搜索内容" v-model="brandId"/> -->
      <el-button v-permission="['GET /admin/drug/application/list']" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
     </div>

    <!-- <div class="operator-container" style="dispaly:flex;justify-content:space-between;"> -->
    <div class="operator-container">
        <el-button v-permission="['POST /admin/drug/application/confirm']" class="filter-item" type="success" @click="handleBatchRecept">批量确认</el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" fit highlight-current-row @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />

      
      <el-table-column align="left" label="品名" prop="name" show-overflow-tooltip/>
      <el-table-column align="left" label="cas号" prop="id"  show-overflow-tooltip/>
      <el-table-column align="left" label="重量" prop="weight" show-overflow-tooltip>
        <!-- <template slot-scope="scope">
          <el-input v-model="scope.row.weight" />
        </template> -->
      </el-table-column>
      <el-table-column align="left" label="分类" prop="name" show-overflow-tooltip/>
      <el-table-column align="left" label="备注" prop="mark" show-overflow-tooltip>
          <!-- <template slot-scope="scope">
            <el-input v-model="scope.row.mark" />
          </template> -->
      </el-table-column>

      <!-- <el-table-column align="center" label="操作" min-width="120" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-permission="['GET /admin/brand/list']" type="danger" size="mini" @click="deleteRow(scope.$index, list)">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    

    <el-tooltip placement="top" content="返回顶部">
      <back-to-top :visibility-height="100" />
    </el-tooltip>

  </div>
</template>

<script>
import { stationList, listBrand, laboratoryList, sureStatus, } from '@/api/materiel'
import BackToTop from '@/components/BackToTop'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import _ from 'lodash'

export default {
  name: 'Aftersale',
  components: { BackToTop, Pagination },
  data() {
    return {
      list: [],
      total: 0,
      listLoading: false,
      // tab: 'all',
      listQuery: {
        page: 1,
        limit: 20,
        // aftersaleSn: undefined,
        // orderId: undefined,
        // status: '',
        // sort: 'add_time',
        // order: 'desc'
      },
      brandList: [],
      statusList: [],
      statusId: '',
      brandId: undefined,
      multipleSelection: [],
    }
  },
  created() {
    this.getBrand()
    this.getList()
    this.statusList = [
      // {value:'1',label:'保存'},
      {value:'2',label:'已提交'},
      {value:'3',label:'已确认'},
    ]
  },
  methods: {
    getList() {
      this.listLoading = true
      stationList(this.listQuery)
      // listBrand(this.listQuery)
        .then(response => {
          this.list = response.data.data.list
          this.total = response.data.data.total
          this.listLoading = false
        })
        .catch(() => {
          this.list = []
          this.total = 0
          this.listLoading = false
        })
    },
    getBrand() {
      laboratoryList()
        .then(response => {
          this.brandList = response.data.data.list
        })
    },
    deleteRow(index,rows){
      rows.splice(index, 1);
    },
    handleFilter() {
      this.getList()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleBatchRecept() {
      if (this.multipleSelection.length === 0) {
        this.$message.error('请选择至少一条记录')
        return
      }
      const ids = []
      _.forEach(this.multipleSelection, function(item) {
        ids.push(item.id)
      })
      sureStatus({ ids: ids })
        .then(response => {
          this.$notify.success({
            title: '成功',
            message: '批量通过操作成功'
          })
          this.getList()
        })
        .catch(response => {
          this.$notify.error({
            title: '失败',
            message: response.data.errmsg
          })
        })
    },
  }
}
</script>

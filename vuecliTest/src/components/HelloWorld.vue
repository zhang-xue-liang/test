<template>
  <div class="hello">

    <compareTable :col='col' :tableDatas='tableDatas' :dropCol='dropCol'></compareTable>



    <br>
    <br>
    <br>


    <AdvancedFilter :data7="gjsx" :sxtj='sxtj'></AdvancedFilter>
    <button @click="tjsxtj">伫倚危楼风细细</button>
    <br>
    <br>



    <Tree :data6="msg" @getNewarr="getNewarr"></Tree>
  </div>
</template>

<script>
  import Tree from "./tree.vue"
  import AdvancedFilter from "./advancedFilter.vue"
  import compareTable from "./compareTable.vue"
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: [ {
            id: 1,
            label: "人力资源",
            children: [ {
                id: 3,
                label: "人力资源规划"
              },
              {
                id: 4,
                label: "招聘"
              },
              {
                id: 5,
                label: "薪酬"
              },
              {
                id: 6,
                label: "绩效"
              },
              {
                id: 7,
                label: "培训"
              }
            ]
          },
          {
            id: 2,
            label: "财务",
            children: [ {
                id: 8,
                label: "财务分析"
              },
              {
                id: 9,
                label: "管理会计"
              }
            ]
          }
        ],
        gjsx: [ {
            name: '名称',
            valuetype: 'text',
            compare: [ '等于', '不等于', '包含', '不包含' ]
          },
          {
            name: '活动类型',
            valuetype: 'list',
            value: [ '促销活动', '品牌活动', '会议销售', '互联网广告' ],
            compare: [ '大于', '不大于', '包含', '不包含' ]
          }
        ],
        col: [ {
            label: "日期",
            prop: "date"
          },
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "地址",
            prop: "address"
          }
        ],
        dropCol: [ {
            label: "日期",
            prop: "date"
          },
          {
            label: "姓名",
            prop: "name"
          },
          {
            label: "地址",
            prop: "address"
          }
        ],
        tableDatas: [ {
            id: "1",
            date: "2016-05-02",
            name: "王小虎1",
            address: "上海市普陀区金沙江路 100 弄"
          },
          {
            id: "2",
            date: "2016-05-04",
            name: "王小虎2",
            address: "上海市普陀区金沙江路 200 弄"
          },
          {
            id: "3",
            date: "2016-05-01",
            name: "王小虎3",
            address: "上海市普陀区金沙江路 300 弄"
          },
          {
            id: "4",
            date: "2016-05-03",
            name: "王小虎4",
            address: "上海市普陀区金沙江路 400 弄"
          }
        ],
        sxtj: []
      }
    },
    methods: {
      getNewarr( value ) {
        console.log( value, '1111111' )
      },
      handleSelectionChange( val ) {
        console.log( val );
      },
      deleteRow( row ) {
        console.log( row );
      },
      tjsxtj() {
        this.sxtj = [
          [ '部门', '为空' ]
        ]
      }
    },
    components: {
      Tree,
      AdvancedFilter,
      compareTable
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .custom-tree-node {
    position: relative;
    width: 100%;
  }

  .custom-tree-node .sszs {
    position: absolute;
    right: 100px;
  }
</style>
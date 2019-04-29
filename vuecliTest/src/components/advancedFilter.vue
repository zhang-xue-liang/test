<template>
  <div>
    <div style="width:800px;border:1px solid red;overflow:hidden;">
      <div style="width:300px;height:30px;border:1px solid gray; margin:10px;">
        <el-tag v-for="(tag,i) in tags" :key="i" closable type="info" :disable-transitions="false" @close="handleClose(tag)">
          {{tag.join(' ')}}
        </el-tag>
        <input type="text" style="border:none;height:90%;width:auto;">

      </div>
      <el-button>高级筛选</el-button>
      <div style="border:3px solid;">
        <h3>筛选条件</h3>
        <div v-for="el in gjsxcount" :key="el">
          <el-select v-model="gjResultarr[el-1].name" placeholder="请选择" @change="yiji(el)">
            <el-option v-for="(item,i) in data7" :key="i" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
          <el-select v-model="gjResultarr[el-1].compare" placeholder="请选择">
            <el-option v-for="(item,i) in gjArr[el-1].compare" :key="i" :label="item" :value="item">
            </el-option>
          </el-select>
          <span v-if="gjArr[el-1].valuetype!='text'">
            <el-select v-model="gjResultarr[el-1].value" multiple placeholder="请选择">
              <el-option v-for="(item,i) in gjArr[el-1].value" :key="i" :label="item" :value="item">
              </el-option>
            </el-select>
          </span>

          <el-input v-model="gjResultarr[el-1].value" placeholder="请输入" v-if="gjArr[el-1].valuetype=='text'"></el-input>
          <button @click="btn2(el)">删除</button>
        </div>
        <button @click="addcount()">添加筛选条件</button>
        <button @click="btn">唧唧复唧唧</button>
        <button @click="btn1">木兰当户织</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [ 'data7', 'sxtj' ],
    methods: {

    },
    data() {
      return {
        tagList: [],
        gjsxcount: 0,
        value: '',
        tags: [

        ],
        gjArr: [],
        gjResultarr: [],
        obj: {
          str: ''
        },

      };
    },
    methods: {
      addcount() {
        this.gjsxcount++
        this.gjArr.push( {
          name: ''
        } )
        this.gjResultarr.push( {
          name: '',
          compare: '',
          value: '',
        } )
      },
      btn() {
        console.log( this.gjResultarr, 'ssssssss' )
      },
      btn1() {
        this.tags = []
        this.gjResultarr.forEach( el => {
          this.tags.push( [ el.name, el.compare, el.value ] )
        } )
        console.log( this.tags.join( ' ' ) )
      },
      btn2( num ) {
        this.gjArr.splice( num - 1, 1 )
        this.gjResultarr.splice( num - 1, 1 )
        this.gjsxcount--
      },

      handleClose( tag ) {
        let num = this.tags.indexOf( tag )
        this.tags.splice( num, 1 );
        this.gjArr.splice( num, 1 )
        this.gjResultarr.splice( num, 1 )
        this.gjsxcount--
      },
      yiji( num ) {
        this.data7.forEach( element => {
          element.name == this.gjResultarr[ num - 1 ].name && ( this.gjArr[ num - 1 ] = element )
        } );

        console.log( this.gjArr )
      }
    },
    mounted() {
      console.log( this.sxtj, 'this.sxtj' )

    },
    watch: {
      sxtj( a, b ) {
        this.tags = a
      }
    }
  };
</script>
<style>
  .el-input {
    width: 194px;
  }
</style>
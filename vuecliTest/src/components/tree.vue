<template>
  <div id="app">
    <div style="width: 500px;margin:0 auto;">
      <el-tree :data="data6" node-key="id" default-expand-all @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable :allow-drop="allowDrop" :allow-drag="allowDrag" :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span class="sszs">
            <el-button type="text" size="mini" @click="() => edit(node, data)">编辑</el-button>
            <el-button type="text" size="mini" @click="() => append1(data)">增加下级</el-button>
            <el-button type="text" size="mini" @click="() => append2(node,data)">增加平级</el-button>
            <el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
          </span>
        </span>
      </el-tree>
      <button @click="btn()">点击</button>
    </div>
    <div style="border:1px solid red;width:200px;height: 200px; position:fixed;right:0;top:200px;" v-show="popup">
      <input type="text" name v-model="editvalue.label">
      <br>
      <button @click="btn2(1)">保存</button>
      <button @click="btn2(2)">取消</button>
    </div>
  </div>
</template>
<script>
  let id = 1000
  export default {
    props: [ "data6" ],
    methods: {
      handleDragStart( node, ev ) {
        // console.log( "drag start   1", node );
      },
      handleDragEnter( draggingNode, dropNode, ev ) {
        // console.log( "tree drag enter: 2", dropNode.label );
      },
      handleDragLeave( draggingNode, dropNode, ev ) {
        // console.log( "tree drag leave: 3", dropNode.label );
      },
      handleDragOver( draggingNode, dropNode, ev ) {
        // console.log( "tree drag over: 4", dropNode.label );
      },
      handleDragEnd( draggingNode, dropNode, dropType, ev ) {
        // console.log( "tree drag end: 5", dropNode && dropNode.label, dropType );
      },
      handleDrop( draggingNode, dropNode, dropType, ev ) {
        console.log( "tree drop: 6", dropNode.label, dropType );
        console.log( this.data6 )
        this.$emit( 'getNewarr', this.data6 )
      },
      allowDrop( draggingNode, dropNode, type ) {
        if( dropNode.data.label === "二级 3-1" ) {
          return type !== "inner";
        } else {
          return true;
        }
      },
      allowDrag( draggingNode ) {
        return draggingNode.data.label.indexOf( "三级 3-2-2" ) === -1;
      },
      edit( node, data ) {
        this.popup = true;
        this.editvalue = data;
      },
      append1( data ) {
        const newChild = {
          id: id++,
          label: "testtest",
          children: []
        };
        if( !data.children ) {
          this.$set( data, "children", [] );
        }
        data.children.push( newChild );
      },
      append2( node, data ) {
        const newChild = {
          id: id++,
          label: "testtest",
          children: []
        };
        console.log( node.parent.data )
        node.parent.data.push( newChild );
      },
      remove( node, data ) {
        console.log( node.parent, data );
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex( d => d.id === data.id );
        children.splice( index, 1 );
      },
      btn() {
        console.log( this.data6, "sssssssss" );
      },
      btn2( a ) {
        if( a == 1 ) {
          this.popup = false;
        } else if( a == 2 ) {
          this.popup = false;
        }
      },
      steamroller( arr ) {
        while( arr.some( item => Array.isArray( item ) ) ) {
          arr = [].concat( ...arr );
        }
        return arr;
      }
    },
    data() {
      return {
        editvalue: "",
        popup: false,

        defaultProps: {
          children: "children",
          label: "label"
        }
      };
    },
    mounted() {
      // console.log( this.data6, 'ss' )
    }
  };
</script>
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
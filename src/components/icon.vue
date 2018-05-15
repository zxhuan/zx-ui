<template>
  <div>
    <ul class="icon-list">
      <li class="icon-item" v-for="(item,key) of iconList" :key="key" @click="copyFn(item,$event)">
        <zx-icon :name='item.name' :scale="item.scale?item.scale:''" :color="item.color?item.color:''"></zx-icon>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        iconList: [{ name: 'app-o', scale: '2.5', color: '#019dfa' }, { name: 'air-drop-o', scale: '2.5', color: '#019dfa' }, { name: 'add-r-o', scale: '2.5', color: '#019dfa' }, { name: 'app-o', scale: '2.5', color: '#019dfa' }, { name: 'air-drop-o', scale: '1.5', color: '#000' }, { name: 'add-r-o', scale: '1.5', color: '#000' }, { name: 'like', scale: '1.5', color: '#f00' }, { name: 'likefill', scale: '1.5', color: '#f00' }, { name: 'roundcheck', scale: '1.5', color: '#000' }, { name: 'arrow-right', scale: '1.5', color: '#000' }, { name: 'arrow-left', scale: '1.5', color: '#000' }, { name: 'arrow-down', scale: '1.5', color: '#000' }, { name: 'word-o', scale: '1.5', color: '#000' }, { name: 'wave-o', scale: '1.5', color: '#000' }, { name: 'volume-o', scale: '1.5', color: '#000' }, { name: 'warehouse-o', scale: '1.5', color: '#000' }, { name: 'volumeopen-o', scale: '1.5', color: '#000' }, { name: 'wallet-o', scale: '1.5', color: '#000' }, { name: 'visible-o', scale: '1.5', color: '#000' }, { name: 'vertical-retraction-', scale: '1.5', color: '#000' }, { name: 'view-list-o', scale: '1.5', color: '#000' }, { name: 'user-r-o', scale: '1.5', color: '#000' }, { name: 'vedio-o', scale: '1.5', color: '#000' }, { name: 'unseen-o', scale: '1.5', color: '#000' }, { name: 'unseen-o', scale: '1.5', color: '#000' }, { name: 'user-o', scale: '1.5', color: '#000' }, { name: 'unsatisfy-o', scale: '1.5', color: '#000' }, { name: 'unlock-o', scale: '1.5', color: '#000' }, { name: 'trend-chart-o', scale: '1.5', color: '#000' }, { name: 'transfer-station-o', scale: '1.5', color: '#000' }, { name: 'top-o', scale: '1.5', color: '#000' }, { name: 'time-o', scale: '1.5', color: '#000' }, { name: 'text-o', scale: '1.5', color: '#000' }, { name: 'template-o', scale: '1.5', color: '#000' }, { name: 'quality-o', scale: '1.5', color: '#000' }, { name: 'diamond-o', scale: '1.5', color: '#000' }, { name: 'cainixihuan', scale: '1.5', color: '#000' }, { name: 'tishishuoming', scale: '1.5', color: '#000' }, { name: 'shouhuodizhiyebianji', scale: '1.5', color: '#000' }, { name: 'text-o', scale: '1.5', color: '#000' }, { name: 'changyonggoupiaorenshanchu', scale: '1.5', color: '#000' }, { name: 'pingjia', scale: '1.5', color: '#000' }, { name: 'daishouhuo', scale: '1.5', color: '#000' }, { name: 'daifukuan', scale: '1.5', color: '#000' }, { name: 'daifukuan', scale: '1.5', color: '#000' }, { name: 'dizhiguanli', scale: '1.5', color: '#000' }, { name: 'guanyanren', scale: '1.5', color: '#000' }, { name: 'yigouxuan', scale: '1.5', color: '#000' }, { name: 'sousuo', scale: '1.5', color: '#000' }, { name: 'faxian', scale: '1.5', color: '#000' }, { name: 'xiaoxi', scale: '1.5', color: '#000' }, { name: 'xiaoxi', scale: '1.5', color: '#000' }, { name: 'fenlei', scale: '1.5', color: '#000' }, { name: 'shouye', scale: '1.5', color: '#000' }, { name: 'saoyisao', scale: '1.5', color: '#000' }, { name: 'shoucang', scale: '1.5', color: '#000' }, { name: 'zanting', scale: '1.5', color: '#000' }, { name: 'shenfenzheng', scale: '1.5', color: '#000' }, { name: 'kefu', scale: '1.5', color: '#000' }, { name: 'guanbi', scale: '1.5', color: '#000' }, { name: 'fanhui', scale: '1.5', color: '#000' }, { name: 'fanhui', scale: '1.5', color: '#000' }, { name: 'fenxiang', scale: '1.5', color: '#000' }]
      };
    },
    methods: {
      copyFn(item, $event) {
        let text = item.name;
        var textArea = document.createElement('input');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? `图标 ${item.name} 已经成功复制到剪贴板` : '该浏览器不支持点击复制到剪贴板';
          this.$dialog.alert({
            msg: msg
          });
        } catch (err) {
          console.log('该浏览器不支持点击复制到剪贴板');
        }
        document.body.removeChild(textArea);
      }
    },
    created() {
      this.$store.dispatch('setTtile', '图标');
    }
  };
</script>
<style scoped>
  .icon-list {
    padding: 0;
    margin: 0;
  }

  .icon-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }

  .icon-item {
    width: 25%;
    /* flex: 1; */
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 12px;
  }
</style>
import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index';
import button from '@/components/button';
import cell from '@/components/cell';
import tab from '@/components/tab';
import input from '@/components/input';
import select from '@/components/select';
import popup from '@/components/popup';
import dialog from '@/components/dialog';
import radio from '@/components/radio';
import checkbox from '@/components/checkbox';
import switchs from '@/components/switch';
import icon from '@/components/icon';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/cell',
      name: 'cell',
      component: cell
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/popup',
      name: 'popup',
      component: popup
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox
    },
    {
      path: '/switch',
      name: 'switch',
      component: switchs
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    }
  ]
});
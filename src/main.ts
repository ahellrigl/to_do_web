import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "@/App.vue";

import PrimeVue from "primevue/config"; // here

import router from "./router";


import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import Skeleton from 'primevue/skeleton';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import TabMenu from 'primevue/tabmenu';
import Tag from 'primevue/tag';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ToggleButton from 'primevue/togglebutton';

const app = createApp(App).use(createPinia()).use(router).use(PrimeVue)
.component('Accordion', Accordion)
.component('AccordionTab', AccordionTab)
.component('AutoComplete', AutoComplete)
.component('Avatar', Avatar)
.component('AvatarGroup', AvatarGroup)
.component('Badge', Badge)
.component('Button', Button)
.component('Calendar', Calendar)
.component('Card', Card)
.component('Checkbox', Checkbox)
.component('Column', Column)
.component('ConfirmDialog', ConfirmDialog)
.component('ConfirmPopup', ConfirmPopup)
.component('ContextMenu', ContextMenu)
.component('DataTable', DataTable)
.component('DataView', DataView)
.component('DataViewLayoutOptions', DataViewLayoutOptions)
.component('Dialog', Dialog)
.component('Divider', Divider)
.component('Dropdown', Dropdown)
.component('Fieldset', Fieldset)
.component('FileUpload', FileUpload)
.component('Image', Image)
.component('InlineMessage', InlineMessage)
.component('Inplace', Inplace)
.component('InputMask', InputMask)
.component('InputNumber', InputNumber)
.component('InputSwitch', InputSwitch)
.component('InputText', InputText)
.component('Listbox', Listbox)
.component('MegaMenu', MegaMenu)
.component('Menu', Menu)
.component('Menubar', Menubar)
.component('Message', Message)
.component('MultiSelect', MultiSelect)
.component('OrderList', OrderList)
.component('Paginator', Paginator)
.component('Panel', Panel)
.component('PanelMenu', PanelMenu)
.component('Password', Password)
.component('PickList', PickList)
.component('ProgressBar', ProgressBar)
.component('RadioButton', RadioButton)
.component('Rating', Rating)
.component('SelectButton', SelectButton)
.component('ScrollPanel', ScrollPanel)
.component('ScrollTop', ScrollTop)
.component('Slider', Slider)
.component('Sidebar', Sidebar)
.component('Skeleton', Skeleton)
.component('SpeedDial', SpeedDial)
.component('SplitButton', SplitButton)
.component('Splitter', Splitter)
.component('SplitterPanel', SplitterPanel)
.component('Steps', Steps)
.component('TabMenu', TabMenu)
.component('TabView', TabView)
.component('TabPanel', TabPanel)
.component('Tag', Tag)
.component('Textarea', Textarea)
.component('TieredMenu', TieredMenu)
.component('Toast', Toast)
.component('Toolbar', Toolbar)
.component('ToggleButton', ToggleButton)
.mount('#app');

// router.isReady().then(() => {
// //   if(localStorage.getItem('token') == null)
// //   {
// //     router.push('/login'); 
// //   }    // Redirect to login page when the app starts
//     app.mount('#app');
//   });

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core CSS
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
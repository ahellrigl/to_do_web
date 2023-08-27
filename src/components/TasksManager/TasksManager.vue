
<template>
  <Toast />
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="flex justify-content-center flex-wrap">
      <Card style="width: 30em">
        <template #title>
          <div class="flex justify-content-center flex-wrap">
            <div class="col-10">
              <label>
                Bienvenida {{ storeApp.user.name }}
              </label>
            </div>
            <div class="col-1">
              <Button icon="pi pi-cog"
                style="border-radius: 20px; background-color: white; color:gray; border-color: rgba(128, 128, 128, 0.644);"
                type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
              <TieredMenu ref="menu" id="overlay_tmenu" v-model="items" popup />
            </div>
          </div>
        </template>
        <template #subtitle>
          <div
            style="border-top-left-radius: 50px; border-top-right-radius: 50px; background-color: rgba(239, 242, 245, 0.63);">
            <div style="padding-left: 5%; padding-right: 5%; padding-top: 2%; padding-bottom: 2%;">
              <div class="flex justify-content-center flex-wrap">
                <div class="flex align-items-center justify-content-center col-2">
                  <i class="pi pi-clock" style="font-size: 20px;"></i>
                </div>
                <div class="align-items-center justify-content-center col-4">
                  <div><b>50</b></div>
                  <div style="font-size: 14px;">Pendientes</div>
                </div>

                <div class="flex align-items-center justify-content-center col-2">
                  <i class="pi pi-check-square" style="font-size: 18px;"></i>
                </div>
                <div class="align-items-center justify-content-center col-4">
                  <div><b>100</b></div>
                  <div style="font-size: 14px;">Realizadas</div>
                </div>

              </div>
            </div>
          </div>
          <div
            style="border-bottom-left-radius: 50px; border-bottom-right-radius: 50px;  background-color: rgba(233, 244, 255, 0.671);">
            <div
              style="padding-left: 5%; padding-right: 5%; padding-top: 2%; padding-bottom: 2%; border-top: inset; border-color:  rgba(233, 244, 255, 0.349); border-width: 1px;">
              <div class="flex justify-content-center flex-wrap">
                <div class="flex align-items-center justify-content-center col-2">
                  <i class="pi pi-folder-open" style="font-size: 22px;"></i>
                </div>
                <div class="align-items-center justify-content-center col-4">
                  <div><b>150</b></div>
                  <div style="font-size: 14px;">Totales</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>

  <Dialog v-model:visible="dialogNewTask" header="New Task">
    <div class="p-fluid" style="margin-top: 25px;">
      <span class="p-float-label">
        <InputText id="title" />
        <label for="title">Title</label>
      </span>
    </div>
    <div class="p-fluid" style="margin-top: 25px;">
      <span class="p-float-label">
        <Textarea rows="5" cols="30" />
        <label for="description">Description</label>
      </span>
    </div>
    <template #footer>
      <!-- <Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="saveTask" /> -->
    </template>
  </Dialog>

  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3">
        <div class="surface-card shadow-2 p-3 border-round">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Orders</span>
              <div class="text-900 font-medium text-xl">152</div>
            </div>
            <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
              style="width:2.5rem;height:2.5rem">
              <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
            </div>
          </div>
          <span class="text-green-500 font-medium">24 new </span>
          <span class="text-500">since last visit</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watchEffect } from 'vue';
import useTasksManager from "./useTasksManager";


const {

  dialogNewTask,
  items,
  menu,
  storeApp,

  toggle,

}
  = useTasksManager();

onMounted(() => {
  // cargarPuertas();
})


</script>
  
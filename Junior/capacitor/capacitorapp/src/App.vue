<template>
    <div style="text-align:center">
        <button @click="takePicture()">Test</button>
        <button @click="scan()">scan</button>
        <div>
            <img style="width: 50%" :src="image_List" alt="">
            <!-- {{image_List}} -->

        </div>
        
        <h3>Informações do dispositivo</h3>
        <div style="text-align:left">
            <ul>
                <li v-for="(item, i) in deviceInfo" :key="i">
                    {{i}} - {{item}}
                </li>
            </ul>
        </div>

        <br>
        <h4>Nível de bateria: {{battery_level}}%</h4>
        <h4>Carregando: {{battery_charging ? 'Sim Caraio': 'Não minzera' }}</h4>
        <br>
        <br>
        <div v-show="!geo_permission">
            <h2>Permitir localização</h2>
            <button @click.prevent="handleRequestPermission()">Permitir Localização</button>
        </div>
    </div>
</template>

<script>

import { Device } from '@capacitor/device';
import { Camera, CameraResultType } from '@capacitor/camera';
// import { plugins, CameraResultType } from'@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

import { BleClient, numberToUUID } from '@capacitor-community/bluetooth-le';
await BleClient.initialize({ androidNeverForLocation: true });

export default {
    data(){
        return {
            name: "Disgraça",
            deviceInfo: {},
            battery_info: {},
            battery_level: 0,
            geo_permission: false,
            image_List:"",

            test:""



        }
    },
    mounted(){
        this.getdeviceInfo()
        this.getBatteryLevel()
        this.getGeolocation()
    },
    methods: {
        async getdeviceInfo(){
            try {
                const info = await Device.getInfo()
                this.deviceInfo = info
            } catch (err) {
                console.log(err);
            }
        },
        async getGeolocation(){
            const permission = await Geolocation.checkPermissions()
            
            if(permission.location != 'granted' && permission.coarseLocation != 'granted'){
                alert("Para acessar os recursos de localização, é preciso que você permita antes.")
                this.geo_permission = false
                return
            }

            try {
                const data = await Geolocation.getCurrentPosition()
                console.log(data);

            } catch (error) {
                
            }
            
        },
        async handleRequestPermission(){
            const permission = await Geolocation.requestPermissions()
            console.log(permission);
        },
        async getBatteryLevel(){
            try {
                const info = await Device.getBatteryInfo()
                this.battery_info = info
                this.battery_level = Math.floor(info.batteryLevel*100)
                this.battery_charging = info.isCharging
            } catch (err) {
                console.log(err);
            }
        },
        async takePicture(){
        const image = await Camera.getPhoto({
            quality:90,
            allowEditing: false,
            resultType: CameraResultType.Uri
        });
        let filePath = Capacitor.convertFileSrc(image.webPath);
        this.image_List = filePath
        
        console.log(filePath)

        },
        async scan(){
            try {
                await BleClient.initialize()
                await BleClient.requestDevice();
                setTimeout(async()=>{
                    await BleClient.stopLEScan();
                    console.log('stooped sacanning');
                },5000);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>
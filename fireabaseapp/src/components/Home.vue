<template>
    <div class="Home">
        <div>
            <label >Names: </label>
            <input type="text" v-model="name">
            <button @click="submitName">Add</button>

        </div>
        <div>
            <ul>
                <li v-for="(personName,key) in names" v-bind:key="key">
                    <div v-if="!personName.edit">
                        <p>{{ personName.name }}</p> <button  @click="setEditNmae(key)" class="edit">Edit</button><button class="Delete" @click="deletedButton(key)">Delete</button>
                    </div>
                    <div v-else>
                        <input type="text" v-model="personName.name">
                        <button  @click="valueEdit(personName,key)" class="save">Edit</button><button class="cancel" @click="cancleEdit(key)">Cancel</button>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</template>


<script>
import { namesRef } from '../firebase';

export default {
    data(){
        return{
            name: null ,
            names:{},
            edited:[]
        }
    },
    created(){
        namesRef.on('value',(snapshot)=>{
            this.names=snapshot.val();
        });
    },
    methods:{
        submitName(){
            namesRef.push({ name: this.name, edit: false});
            this.name=''
        },
        setEditNmae(key){
            namesRef.child(key).update({edit: true})
        },
        cancleEdit(key){
            namesRef.child(key).update({edit: false})
        },
         valueEdit(person,key){
             
            namesRef.child(key).set({name: person.name,edit:false})
        },
        deletedButton(key){
            namesRef.child(key).remove();
        }
    },

}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding: 0
}
li{
  
  margin: 0 10px;  
}
button{
    margin: 5px;
    
}
.edit{
    color: white;
    background: red
}
</style>

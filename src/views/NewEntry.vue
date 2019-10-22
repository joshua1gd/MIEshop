<template>
  <div class='mt-5'>
    <b-container>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Title:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.title"
            required
            placeholder="Enter Title For Listing"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Price:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.price"
            required
            placeholder="Enter Price"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Description:">
          <b-form-textarea
            id="textarea"
            v-model="form.description"
            placeholder="Description..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group id="Date" label="Current Date">
          {{getTime | timePrettify}}
        </b-form-group>


        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          price: '',
          description: '',
          title: '',
          time: ''
        },
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        db.collection("Offerings").add({
          Name: this.form.name,
          Price: this.form.price,
          Description: this.form.description,
          Title: this.form.title,
          Time: this.form.time
        })
        .then(() => {
            console.log("Document successfully written!");
            this.form ={name: '', price: '', description: '', title: ''
        }
            alert('Listing Posted! View in the "Shop" Tab!');
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      },
    },
    computed: {
      getTime(){
        const d = new Date();
        const t = d.getTime();
        this.form.time = t;
        return t;
      }
    },
    filters: {
      timePrettify(time){
        return new Date(time).toString();
      }
    }
  }
</script>
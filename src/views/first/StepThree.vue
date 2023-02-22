<template>
  <div class="stepThree">
    <div class="ThirdContainer">
      <div class="col-12 mb-3 pos-rel">
        <label for="input3" class="form-label">Телефон рақами</label>
        <input type="number" class="form-control" id="input3" placeholder="Телефон рақами"
          aria-label="Recipient's username" aria-describedby="basic-addon2"
          :class="{ 'is-invalid': $v.form3.phone.$error }" v-model.number="form3.phone">
        <span v-if="$v.form3.phone.$error" class="validation-error">Телефон рақамни киритиш шарт</span>
      </div>

      <div class="col-12 mb-3">
        <label for="input4" class="form-label">Э-маил</label>
        <input type="email" class="form-control" id="input4" placeholder="Э-маил" aria-label="Recipient's username"
          aria-describedby="basic-addon2" v-model="form3.email">
      </div>

      <div class="col-12 mb-3">
        <label for="input5" class="form-label">Сайт</label>
        <input type="text" class="form-control" id="input5" placeholder="Сайт" aria-label="Recipient's username"
          aria-describedby="basic-addon2" v-model="form3.sayt">
      </div>

      <div class="col-12 btnWr">
        <button type="submit" class="btn stepBtn" @click="sendFeedback2">
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { required, integer } from "vuelidate/lib/validators";
export default {
  name: 'step-three',
  data() {
    return {
      form3: {
        phone: null,
        email: null,
        sayt: null
      },
    }
  },
  validations() {
    return {
      form3: {
        phone: {
          required,
          integer
        }
      }
    }
  },
  methods: {
    sendFeedback2() {
      this.$v.form3.$touch();
      if (this.$v.form3.$invalid) {
        return
      }

      this.toParent()


      let btn1 = document.getElementById("btnThree").getAttribute("aria-expanded"),
        btn2 = document.getElementById("btnFour").getAttribute("aria-expanded"),
        collapse1 = document.getElementById("collapseThree"),
        collapse2 = document.getElementById("collapseFour");

      // console.log(btn1, btn2)

      btn1 = true;

      if (btn1 == true) {
        btn1 = false;
        btn2 = true;

        collapse1.classList.remove("show");
        collapse2.classList.add("show");

        const progress = document.querySelector("#progress");
        progress.setAttribute("value", 100);

        if (btn2) {
          // console.log(btn2)
        }
      }
    },
    toParent() {
      this.$emit('step3', this.form3)
    }
  }
}
</script>
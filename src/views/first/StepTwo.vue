<template>
  <div class="stepTwo">
    <div class="secondContainer">
      <div class="mb-3 pos-rel">
        <label for="exampleFormControlInput1" class="form-label">Манзил</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Манзил" v-model="form1.address"
          :class="{ 'is-invalid': $v.form1.address.$error }" />
        <span v-if="$v.form1.address.$error" class="validation-error">Манзилни киритиш шарт</span>
      </div>

      <div class="mb-3 pos-rel">
        <label for="exampleFormControlInput1" class="form-label">Директор</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Директор"
          :class="{ 'is-invalid': $v.form1.director.$error }" v-model="form1.director" />
        <span v-if="$v.form1.director.$error" class="validation-error">Директор киритилиши шарт</span>
      </div>

      <div class="col-12">
        <label for="select2" class="form-label loclab">Ташкилот тури</label>
        <select class="form-select" id="select2" aria-label="Default select example" v-model="form1.organization">
          <option selected>Қуйидагилардан танланг...</option>
          <option value="1">Давлат ташкилотлари</option>
          <option value="2">Aксионерлик жамияти</option>
          <option value="3">Масъулияти чекланган жамият</option>
          <option value="4">Халқаро ташкилот</option>
          <option value="3">Хусусий корхона</option>
        </select>
      </div>

      <!-- Date Input Start -->

      <div class="row form-group mt-3">
        <label for="date" class="form-label loclab">Ташкил қилинган сана</label>
        <div class="col-12">
          <div class="input-group date" id="datepicker" @click="isPicker = !isPicker">
            <input type="text" class="form-control" v-model="form1.date" :placeholder="visitDate" />
            <span class="input-group-append">
              <span class="input-group-text bg-white">
                <i class="bi bi-calendar3" v-if="isDate == false"></i>
                <button class="circle-btn" v-else>
                  <div class="circle-loader"></div>
                </button>
              </span>
            </span>
          </div>
        </div>
        <Datepicker :datepicker-active="isPicker" @date="getActiveDate" />
      </div>

      <!-- Date Input End -->

      <div class="col-sm-4 mt-3">
        <div class="form-switch">
          <input class="form-check-input" type="checkbox" role="switch" v-model="form1.isNew"
            id="flexSwitchCheckDefault" />
          <label class="form-check-label" for="flexSwitchCheckDefault">Янги таъмирланган</label>
        </div>
      </div>

      <div class="col-12 btnWr">
        <button type="submit" class="btn stepBtn" @click="sendFeedback1">
          Next Step
          <!-- <router-link to="/second-step">Next Step</router-link> -->
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "@/components/commons/AppDatepicker.vue";
import { required } from "vuelidate/lib/validators";
export default {
  name: "step-two",
  components: { Datepicker },
  data() {
    return {
      form1: {
        address: null,
        director: null,
        organization: null,
        date: null,
        isNew: false,
      },
      visitDate: "Ташкил қилинган сана",
      isDate: false,
      isPicker: false,
    };
  },
  validations() {
    return {
      form1: {
        address: {
          required
        },
        director: {
          required
        }
      }
    }
  },
  methods: {
    sendFeedback1() {
      this.$v.form1.$touch();
      if (this.$v.form1.$invalid) {
        return
      }

      this.goParent()

      let btn1 = document
        .getElementById("btnTwo")
        .getAttribute("aria-expanded"),
        btn2 = document
          .getElementById("btnThree")
          .getAttribute("aria-expanded"),
        collapse1 = document.getElementById("collapseTwo"),
        collapse2 = document.getElementById("collapseThree");
      // console.log(btn2)

      btn1 = true;

      if (btn1 == true) {
        btn1 = false;
        btn2 = true;

        collapse1.classList.remove("show");
        collapse2.classList.add("show");

        const progress = document.querySelector("#progress");
        progress.setAttribute("value", 70);

        if (btn2) {
          // console.log(btn2)
        }
      }
    },

    goParent() {
      this.$emit('step2', this.form1)
    },

    getActiveDate(val) {
      this.visitDate = val;
      this.form1.date = val;
      this.isDate = true;

      setTimeout(() => {
        this.isDate = false;
      }, 400);
    },
  },
};
</script>

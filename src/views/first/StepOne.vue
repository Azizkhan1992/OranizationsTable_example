<template>
  <div class="stepOne">
    <div class="firstContainer mt-5">
      <!-- <form class="row g-3"> -->
      <div class="input-group mb-3">
        <label for="inp" class="form-label loclab">Исмни киритинг</label>
        <input type="text" class="form-control inpName" placeholder="Исмни киритинг" id="inp" aria-label="Username"
          aria-describedby="basic-addon1" v-model="form.name" :class="{ 'is-invalid': $v.form.name.$error }" />
        <span v-if="$v.form.name.$error" class="validation-error">Исмни киритиш шарт</span>
      </div>

      <div class="input-group mb-3 inps">
        <label for="inp1" class="form-label loclab">ИНН</label>
        <input type="number" class="form-control" v-model.number="form.inn" placeholder="ИНН"
          aria-label="Recipient's username" aria-describedby="button-addon2" id="inp1" />
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">
          <i class="bi bi-search"></i>
        </button>
      </div>
      <div class="col-12 selectR">
        <label for="select1" class="form-label loclab">Ҳудуд</label>
        <select class="form-select" id="select1" aria-label="Default select example" v-model.number="form.region"
          :class="{ 'is-invalid': $v.form.region.$error }">
          <option selected>Қуйидагилардан танланг...</option>
          <option value="1">Тошкент</option>
          <option value="2">Самарқанд</option>
          <option value="3">Бухоро</option>
          <option value="4">Хоразм</option>
          <option value="5">Қўқон</option>
          <option value="6">Қашқадарё</option>
          <option value="7">Навоий</option>
        </select>
        <span v-if="$v.form.region.$error" class="validation-error">Ҳудуд киритилиши шарт</span>
      </div>

      <div class="input-group mb-3 inps">
        <label for="inp3" class="form-label loclab">Тўлиқ номланиши</label>
        <input type="text" class="form-control lName" placeholder="Тўлиқ номланиши" aria-label="Recipient's username"
          aria-describedby="button-addon2" id="inp3" @keyup="findLName" v-model="form.lNames" />
        <p class="placehol" v-if="isSelected">{{ form.lNames }}</p>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">
          <i v-if="isLLoader == false" class="bi bi-globe"></i>

          <button class="circle-btn" v-if="isLLoader">
            <div class="circle-loader"></div>
          </button>
        </button>

        <div class="longFounds">
          <span v-show="isNameS" v-for="(name, idx) in foundLNames" :key="idx" @click="selectedLN(name)">{{ name }}</span>
        </div>
      </div>
      <div class="col-12 btnWr">
        <button type="submit" class="btn stepBtn" @click="sendFeedback">
          Next Step
          <!-- <router-link to="/second-step">Next Step</router-link> -->
        </button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>
<script>
import { required, integer } from "vuelidate/lib/validators";
// import TokenService from "@/services/TokenService";
export default {
  name: "step-one",
  data() {
    return {
      form: {
        name: null,
        lNames: null,
        inn: null,
        region: null,
      },
      longNames: [
        "AnorBank",
        "National Bank Uzbekistan",
        "Orient Finance Bank",
        "Online Service Group",
        "WEBASE",
        "TB-C",
        "Ali EXPRESS",
        "Google",
        "MediaPark",
        "IPhone",
        "Samsung",
        "LG",
        "Nokia",
        "Bosch",
        "IT-Park",
      ],
      placeholder: "",
      isLLoader: false,
      foundLNames: [],
      isSelected: false
    };
  },

  validations() {
    return {
      form: {
        name: {
          required,
        },
        region: {
          required,
          integer,
        },
      },
    };
  },

  methods: {
    sendFeedback() {
      this.$v.form.$touch();
      if (this.$v.form.$invalid) {
        return;
      }

      this.toParent()

      const params = {
        name: this.form.name,
        isAuthorize: true,
      };


      this.$store.commit("checkAuthorize", params);

      //   console.log(this.form)

      let btn1 = document
        .getElementById("btnOne")
        .getAttribute("aria-expanded"),
        btn2 = document.getElementById("btnTwo").getAttribute("aria-expanded"),
        collapse1 = document.getElementById("collapseOne"),
        collapse2 = document.getElementById("collapseTwo");

      if (btn1 == "true") {
        btn1 = false;
        btn2 = true;
        collapse1.classList.remove("show");
        collapse2.classList.add("show");

        if (btn2 == "false") {
          // console.log(btn1, btn2)
        }

        const progress = document.querySelector("#progress");
        progress.setAttribute("value", 40);
      }
    },
    toParent() {
      this.$emit('step1', this.form)
    },

    selectedLN(val) {
      this.placeholder = val;
      this.form.lNames = val;
      this.isNameS = false;
      this.isSelected = true
      // console.log(this.form.lNames)
    },

    findLName(e) {
      // console.log(e)
      if (e) {
        this.isLLoader = true;
        this.isNameS = true;
      }

      setTimeout(() => {
        this.isLLoader = false;
      }, 500);

      let inp_val = e.target.value;
      if (inp_val !== "") {
        this.foundLNames = this.longNames.filter((e) => {
          e = e.toLowerCase();
          return e.includes(inp_val.toLowerCase());
        });

        if (e.keyCode === 8) {
          this.placeholder = this.placeholder.slice(0, -1);
        } else {
          this.placeholder = e.target.value;
        }
      } else {
        this.foundLNames = [];
        this.placeholder = "";
      }
    },
  },
};
</script>


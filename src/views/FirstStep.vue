<template>
  <section>
    <div class="container">
      <div class="accordion" id="accordionExample">
        <div class="steps">
          <progress id="progress" value="5" max="100"></progress>
          <div class="step-item">
            <button class="step-button text-center" type="button" id="btnOne" data-toggle="collapse"
              data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" @click="checkBtn('btnOne')">
              1
            </button>
          </div>

          <div class="step-item">
            <button class="step-button text-center collapsed" id="btnTwo" type="button" data-toggle="collapse"
              data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" @click="checkBtn('btnTwo')">
              2
            </button>
          </div>

          <div class="step-item">
            <button class="step-button text-center collapsed" id="btnThree" type="button" data-toggle="collapse"
              data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              @click="checkBtn('btnThree')">
              3
            </button>
          </div>

          <div class="step-item">
            <button class="step-button text-center collapsed" id="btnFour" type="button" data-toggle="collapse"
              data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" @click="checkBtn('btnFour')">
              4
            </button>
          </div>
        </div>

        <div class="card">
          <div id="headingOne"></div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              <StepOne @step1="getStep1" />
            </div>
          </div>
        </div>

        <div class="card">
          <div id="headingTwo"></div>

          <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              <StepTwo @step2="getStep2" />
            </div>
          </div>
        </div>

        <div class="card">
          <div id="headingThree"></div>

          <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              <StepThree @step3="getStep3" />
            </div>
          </div>
        </div>

        <div class="card">
          <div class="headingFour"></div>

          <div class="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div class="card-body">
              <StepFour @step4="getStep4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import StepOne from "./first/StepOne.vue";
import StepTwo from "./first/StepTwo.vue";
import StepThree from "./first/StepThree.vue";
import StepFour from "./first/StepFour.vue";
export default {
  name: "app-first",
  components: { StepOne, StepTwo, StepThree, StepFour },
  data() {
    return {
      isForm: false,
      isLoader: false,
      isChecked: false,
      nameVal: "",
      isNameS: false,

      checked: false,

      isCheckedFour: false,
      form1: null,
      form2: null,
      form3: null,
      form4: null
    };
  },

  mounted() {
    this.checkCollapse();
    this.checkProgress();
  },

  // validations() {
  //   return {
  //     form: {
  //       name: {
  //         required,
  //       },
  //       region: {
  //         required,
  //         integer,
  //       },
  //     },
  //   };
  // },

  methods: {
    getStep1(val) {
      this.form1 = val
    },

    getStep2(val) {
      this.form2 = val
    },

    getStep3(val) {
      this.form3 = val
    },

    getStep4(val) {
      this.form4 = val

      this.saveAll()
    },

    saveAll() {

      const params = {
        form1: this.form1,
        form2: this.form2,
        form3: this.form3,
        form4: this.form4
      }

      this.$store.commit('changeAllData', params)

      this.$router.push('/')
    },


    checkCollapse() {
      let one = document.getElementById("btnOne"),
        colOne = document.getElementById("collapseOne");

      if (one.getAttribute("aria-expanded") == "true") {
        colOne.classList.add("show");
      }
    },
    checkBtn(id) {
      let colOne = document.getElementById("collapseOne"),
        colTwo = document.getElementById("collapseTwo"),
        colThree = document.getElementById("collapseThree"),
        colFour = document.getElementById("collapseFour");
      // console.log(colOne, colTwo)

      if (id == "btnOne") {
        colOne.classList.add("show");
        colTwo.classList.remove("show");
        colThree.classList.remove("show");
        colFour.classList.remove("show");
      } else if (id == "btnTwo") {
        colTwo.classList.add("show");
        colOne.classList.remove("show");
        colThree.classList.remove("show");
        colFour.classList.remove("show");
      } else if (id == "btnThree") {
        colThree.classList.add("show");
        colOne.classList.remove("show");
        colTwo.classList.remove("show");
        colFour.classList.remove("show");
      } else {
        colFour.classList.add("show");
        colOne.classList.remove("show");
        colTwo.classList.remove("show");
        colThree.classList.remove("show");
      }
    },
    checkProgress() {
      const stepBtns = document.querySelectorAll(".step-button");
      const progress = document.querySelector("#progress");

      Array.from(stepBtns).forEach((btn, index) => {
        btn.addEventListener("click", () => {
          progress.setAttribute("value", index * 35);
        });
      });
    },
  },
};
</script>

<style lang="scss">
$backW: #fff;
$cviolet: #712cf9;

.mainNavbar {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  row-gap: 24px;

  .defaultC {
    .navSw {
      width: 42px;
      height: 24px;
      cursor: pointer;
    }
  }
}

.selectR {
  position: relative;
  margin-bottom: 16px;
}

.inpName {
  border-radius: 4px !important;
}

.lName {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
}

#button-addon2 {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.form-switch {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding: 0 !important;
  column-gap: 48px;
  align-items: center;

  .form-check-input {
    width: 42px;
    height: 24px;
    cursor: pointer;
    margin-left: 12px;
  }
}

.bg-white {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}

.steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  position: relative;

  .step-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: $cviolet;
    color: $backW;
  }
}

.step-item {
  z-index: 10;
}

#progress::-webkit-progress-value {
  background-color: $cviolet;
  transition: 0.24s ease;
}

#progress::-webkit-progress-bar {
  background-color: grey;
}

#progress {
  -webkit-appearance: none;
  height: 10px;
  position: absolute;
  width: 100%;
  z-index: 5;
}

.is-invalid {
  border-color: red;
}

.longFounds {
  width: 50%;
  position: absolute;
  top: 110%;
  display: flex;
  flex-direction: column;
  background: $backW;
  z-index: 9;
  padding: 0 0 12px;
  box-sizing: border-box;

  span {
    cursor: pointer;

    &:hover {
      color: $cviolet;
    }
  }
}

.inps {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
}

.loclab {
  width: 100%;
}

.shortN {
  position: relative;
}

.founds {
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 110%;
  padding-top: 8px;
  box-sizing: border-box;
  z-index: 9;
  background: $backW;

  span {
    cursor: pointer;

    &:hover {
      color: $cviolet;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.circle-btn {
  display: block;
  width: 20px;
  height: 20px;
  background: $cviolet;
  justify-items: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.circle-btn:hover {
  background: #ffffff;
  border: 2px solid $cviolet;
}

.circle-btn .circle-loader {
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 50%;
  border-top: 2px solid $cviolet;
  width: 10px;
  height: 10px;
  animation: spin 2s linear infinite;
  margin: auto;
}

.circle-btn:hover .circle-loader {
  color: $cviolet;
  border: 2px solid $cviolet;
  border-top: 2px solid #ffffff;
}
</style>

<template>
  <div class="stepFour">
    <div class="mainNavbar">
      <div class="account">
        <div class="col-12">
          <label for="acc1" class="form-label loclab">Ҳисоб рақами</label>
          <input type="number" id="acc1" class="form-control" placeholder="Ҳисоб рақами"
            :class="{ 'is-invalid': $v.form4.account.$error }" @keyup="findAcc" v-model="form4.account" />
          <p class="placehol" v-if="selectedAcc !== null">{{ selectedAcc }}</p>
          <span v-if="$v.form4.account.$error" class="validation-error">Ҳисоб рақамини киритиш шарт</span>
          <button class="circle-btn" v-if="isLoaderFour">
            <div class="circle-loader"></div>
          </button>
        </div>

        <div class="foundAccs" :class="isFoundAcc ? 'foundAccActive' : ''">
          <span v-for="(acc, i) in foundAccs" :key="i" @click="getAcc(acc)">{{ acc }}</span>
        </div>
      </div>

      <div class="accountName">
        <div class="col-12">
          <label for="acc2" class="form-label loclab">Ҳисоб рақам номи</label>
          <input id="acc2" type="text" class="form-control" placeholder="Ҳисоб рақам номи" @keyup="findNames"
            v-model="form4.accountName" />
          <p class="placehol" v-if="selectedName !== null">{{ selectedName }}</p>
          <button class="circle-btn" v-if="isLoader">
            <div class="circle-loader"></div>
          </button>

          <div class="foundAccs" :class="isFoundName ? 'foundAccActive' : ''">
            <span v-for="(name, i) in foundNames" :key="i" @click="getAccName(name)">{{ name }}</span>
          </div>
        </div>
      </div>

      <div class="bankName pos-rel">
        <label for="select4" class="form-label loclab">Банк номи</label>
        <select class="form-select" aria-label="Default select example" id="select4"
          :class="{ 'is-invalid': $v.form4.bankName.$error }" v-model="form4.bankName">
          <option selected>Қуйидагилардан танланг</option>
          <option value="1">NBU</option>
          <option value="2">OFB</option>
          <option value="3">Hamkor</option>
          <option value="4">Xalq</option>
          <option value="5">QQB</option>
          <option value="6">Turon</option>
          <option value="7">Kapital</option>
        </select>
        <span v-if="$v.form4.bankName.$error" class="validation-error">Банкни киритиш шарт</span>
      </div>

      <div class="col-12 btnWr">
        <button type="submit" class="btn stepBtn" @click="sendFeedback4">
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "step-four",
  data() {
    return {
      accounts: [
        "2145423-3132233-534234",
        "4232432-2343256-645375",
        "4325344-6549355-235467",
        "1429583-9349424-535623",
        "5324503-5435324-995343",
        "9595029-9245325-925396",
        "8674734-8548694-969697",
        "5343563-5643563-543436",
        "2416435-6436336-895683",
        "1526744-7545576-764546",
        "5322423-6534323-634576",
        "9546453-5643653-653466",
        "8435634-3456342-634225",
        "3256356-7645775-765654",
        "2523543-6542674-653467",
        "1413245-3426323-123566",
        "8454234-2362576-652374",
      ],
      foundAccs: [],
      isLoaderFour: false,
      isFoundAcc: false,
      accountNames: [
        "O'zbekiston Milliy Banki",
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
        "Account 1",
        "Account 2",
        "Account 3",
      ],
      foundNames: [],
      isFoundName: false,
      isLoader: false,
      selectedAcc: null,
      selectedName: null,
      form4: {
        account: null,
        accountName: null,
        bankName: null
      }
    };
  },
  validations() {
    return {
      form4: {
        account: {
          required
        },
        bankName: {
          required
        }
      }
    }
  },
  methods: {
    sendFeedback4() {
      this.$v.form4.$touch();
      if (this.$v.form4.$invalid) {
        return
      }

      this.toParent()
    },

    toParent() {
      this.$emit('step4', this.form4)
    },

    getAcc(acc) {
      if (acc) {
        this.selectedAcc = acc
        this.isFoundAcc = false
        this.form4.account = acc
      }
      // console.log(acc)
    },

    getAccName(name) {
      if (name) {
        this.selectedName = name
        this.isFoundName = false
        this.form4.accountName = name
      }
    },


    findAcc(e) {
      let inp_acc = e.target.value;
      // console.log(e)

      if (e) {
        this.isLoaderFour = true;

        setInterval(() => {
          this.isLoaderFour = false;
        }, 800);
        if (e.key !== "Backspace") {
          this.isFoundAcc = true;

          this.foundAccs = this.accounts.filter((val) => {
            return val.includes(inp_acc);
          });
        } else {
          this.foundAccs = [];

          this.selectedAcc = null

          this.isLoader = false;

          setTimeout(() => {
            this.isFoundAcc = false;
          }, 500);
        }
      }
      // console.log(this.foundAccs)
    },
    findNames(e) {
      let inp_acc = e.target.value;
      // console.log(e)

      if (e) {
        // setInterval(() => {
        // }, 600)
        if (e.key !== "Backspace") {
          this.isFoundName = true;
          this.isLoader = true

          setTimeout(() => {
            this.isLoader = false
          }, 800)

          this.foundNames = this.accountNames.filter((val) => {
            return val.includes(inp_acc);
          });
        } else {
          this.foundNames = [];

          this.selectedName = null

          // console.log(this.selectedName)

          setTimeout(() => {
            this.isFoundName = false;
          }, 500);
        }
      }
      // console.log(this.foundNames)
    },
    onChange() {
      this.isCheckedFour = !this.isCheckedFour;
    },
  },
};
</script>
<style lang="scss">
$backW: #fff;
$cviolet: #712cf9;

.foundAccs {

  span {
    cursor: pointer;
  }
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

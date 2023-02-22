<template>
  <div class="homeContainer container">
    <h3>Ташкилотингизни киритинг</h3>


    <nav>
      <div class="nav nav-tabs mt-5" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
          role="tab" aria-controls="nav-home" aria-selected="true" disabled>
          Ташкилот номи
        </button>


        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button"
          role="tab" aria-controls="nav-profile" aria-selected="profile" @click="changeTab('nav-profile-tab')">
          Ташкилот ҳақида
        </button>

        <button class="nav-link" id="nav-type-tab" data-bs-toggle="tab" data-bs-target="#nav-type" type="button"
          role="tab" aria-controls="nav-type" aria-selected="false" @click="changeTab('nav-type-tab')">
          Ташкилот тури
        </button>
        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button"
          role="tab" aria-controls="nav-contact" aria-selected="false" @click="changeTab('nav-contact-tab')">
          Contact
        </button>
      </div>

      <!-- <div class="nav-content" id="nav-tabContent" v-show="organizations.length>0" v-for="org, idx in organizations" :key="idx">
                  {{ org }}

                  
                </div> -->

      <div class="nav-content" id="nav-tabContent" v-show="organizations.length > 0" v-for="org, idx in organizations"
        :key="idx">

        <div class="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <thead>
            <tr>
              <th>{{ org.form1.lNames }}</th>
            </tr>
          </thead>
        </div>

        <div class="tab-pane fade p-3 aboutOrg" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <table class="profile-table tabs">
            <thead>
              <tr>
                <td>{{ getOrgRegion(org.form1.region) }}</td>
              </tr>
              <tr>
                <td>{{ org.form2.director }}</td>
              </tr>
              <tr>
                <td>{{ org.form2.isNew ? 'Ҳолати янги' : 'Ҳолати эски' }}</td>
              </tr>
              <tr>
                <td>{{ getOrgCreated(org.form2.date) }} йилда очилган</td>
              </tr>
            </thead>
          </table>
        </div>

        <div class="tab-pane fade p-3 typeOrg" id="nav-type" role="tabpanel" aria-labelledby="nav-type-tab">
          <table class="type-table tabs">
            <thead>
              <tr>
                <td>{{ getOrgType(org.form2.organization) }}</td>
              </tr>
              <tr>
                <td>{{ org.form4.account }}</td>
              </tr>
              <tr>
                <td>{{ org.form1.inn }}</td>
              </tr>
              <tr>
                <td>{{ getOrgBank(org.form4.bankName) }}</td>
              </tr>
            </thead>
          </table>
        </div>

        <div class="tab-pane fade p-3 orgContact" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <table class="contact-table tabs">
            <thead>
              <tr>
                <td>{{ org.form2.address }}</td>
              </tr>
              <tr>
                <td>{{ getOrgRegion(org.form1.region) }}</td>
              </tr>
              <tr>
                <td>+{{ org.form3.phone }}</td>
              </tr>
              <tr>
                <td>{{ org.form3.email }}</td>
              </tr>
              <tr>
                <td>{{ org.form3.sayt }}</td>
              </tr>
            </thead>
          </table>
        </div>


      </div>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'app-home',
  data() {
    return {
      organizations: this.$store.state.AllData,
      months: [
        'Январ',
        'Феврал',
        'Март',
        'Aпрел',
        'Май',
        'Июн',
        'Июл',
        'Aвгуст',
        'Сентабр',
        'Октабр',
        'Ноябр',
        'Декабр'
      ],


    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      let item = document.getElementsByClassName('aboutOrg'),
        type = document.getElementsByClassName('typeOrg'),
        contact = document.getElementsByClassName('orgContact')

      Array.from(item).forEach(elem => {
        elem.classList.add('show')
      })

      Array.from(type).forEach(elem => {
        elem.classList.add('none')
      })
      Array.from(contact).forEach(elem => {
        elem.classList.add('none')
      })
    },


    getOrgBank(bank) {
      let item,
        allBanks = this.$store.state.bankNames

      allBanks.find(el => {
        if (el.id == bank) {
          item = el.name
        }
      })
      return item

    },

    getOrgCreated(data) {
      if (data) {
        let orgDay, reversedDay, splDate, orgMon, day, year, month

        orgDay = data.split('/')

        reversedDay = orgDay.reverse()

        splDate = reversedDay.join('/')


        day = new Date(splDate).getDate()
        orgMon = new Date(splDate).getMonth()

        year = new Date(splDate).getFullYear()

        month = this.months.find((el, idx) => {
          if (idx === orgMon) {
            return el
          }
        })

        return day + ' ' + month + ' ' + year
      }

    },

    getOrgType(type) {
      let types = this.$store.state.organizationTypes, item

      this.orgType = types.find(elem => {
        if (elem.id == type) {
          item = elem.name
        }
      })

      return item
    },

    getOrgRegion(region) {
      let regions = this.$store.state.regions,
        item

      regions.find(elem => {
        if (elem.id === region) {
          item = elem.name
        }
      })
      return item
    },
    changeTab(id) {
      let profile = document.getElementsByClassName('aboutOrg'),
        type = document.getElementsByClassName('typeOrg'),
        contact = document.getElementsByClassName('orgContact')

      if (this.organizations.length > 0) {
        if (id === 'nav-profile-tab') {
          Array.from(profile).forEach(elem => {
            elem.classList.remove('none')
            elem.classList.add('show')
          })

          Array.from(type).forEach(elem => {
            elem.classList.remove('show')
            elem.classList.add('none')
          })

          Array.from(contact).forEach(elem => {
            elem.classList.remove('show')
            elem.classList.add('none')
          })
        } else if (id === 'nav-type-tab') {
          Array.from(type).forEach(elem => {
            elem.classList.remove('none')
            elem.classList.add('show')
          })

          Array.from(profile).forEach(elem => {
            elem.classList.remove('show')
            elem.classList.add('none')
          })

          Array.from(contact).forEach(elem => {
            elem.classList.remove('show')
            elem.classList.add('none')
          })
        } else {
          Array.from(contact).forEach(elem => {
            elem.classList.remove('none')
            elem.classList.add('show')
          })

          Array.from(profile).forEach(elem => {
            elem.classList.remove('show')
            elem.classList.add('none')
          })

          Array.from(type).forEach(elem => {
            elem.classList.remove('show')
            elem.classList.add('none')
          })
        }
      }


    },
  }
}
</script>
<style lang="scss">
#nav-home {
  display: block !important;
  opacity: 1 !important;
  min-width: 80px !important;
  padding: 16px 8px !important;
}

.tabs {
  tr {
    td {
      font-size: 1rem;
      font-weight: 500;
    }
  }
}

.orgContact {
  margin-left: 48px;
}

.profile-table {
  margin-left: 48px;

  thead {
    display: flex;
    column-gap: 12px;
  }
}

.contact-table {
  thead {
    display: flex;
    column-gap: 12px;
  }
}

.type-table {

  thead {
    display: flex;
    column-gap: 12px;
  }
}

.typeOrg {
  margin-left: 48px;
}


.nav-content {
  display: flex !important;
}

.tab-pane {

  &.none {
    display: none;
    transform: scale(0);
    height: 0;
    overflow: hidden;
  }

  &.show {
    display: block;
    transform: scale(1);
    height: fit-content;
  }
}

@media screen and (max-width: 768px) {
  .tab-pane {

    &.show {

      table {

        thead {
          flex-direction: column;
          row-gap: 8px;
        }
      }
    }
  }
}
</style>
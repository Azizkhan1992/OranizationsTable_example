<template>
  <div class="headerContainer pt-3 pb-3 shadow p-3 mb-5 bg-body-tertiary rounded">
    <div class="container">
      <div class="text-center">
        <div class="row headerWrapper">
          <div class="col logo">
            <i class="orgIcon bi bi-buildings" @click="goHome"></i>
            <h5 @click="goHome">OrganizationName</h5>
          </div>
          <div class="col switcher">
            <!-- Navbar Start -->

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation" @click="isDrop = !isDrop">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapseHeader navbar-collapse" :class="isDrop ? 'navActive' : 'navDeactive'">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" @click="goHome">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false" @click="isDesc = !isDesc">
                        Категориялар
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">Ташкилотлар</a>
                        </li>
                        <li>
                          <a class="dropdown-item" @click="isLeft = !isLeft" @mouseover="isLeft = true"
                            @mouseleave="isLeft = false">
                            <i class="bi bi-caret-left-fill" :class="isLeft ? 'active' : 'deactive'"></i>
                            Янгиликлар</a>
                          <ul class="dropNews" :class="isLeft ? 'newsActive' : 'newsDeactive'" @mouseover="isLeft = true"
                            @mouseleave="isLeft = false">
                            <li><a href="#" class="dropdown-item">Жаҳон</a></li>
                            <li>
                              <a href="#" class="dropdown-item">Технология</a>
                            </li>
                            <li><a href="#" class="dropdown-item">Фан</a></li>
                            <li><a href="#" class="dropdown-item">Спорт</a></li>
                          </ul>
                        </li>

                        <li><a class="dropdown-item" href="#">Мақолалар</a></li>
                        <li><a href="#" class="dropdown-item">Aлоқа</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/first-step">Ташкилот қўшиш</router-link>
                    </li>
                    <!-- <li class="nav-item" v-if="isHeaderName">
                                            <a class="nav-link" @click="removeAuth">Рўйхатни ўчириш</a>
                                        </li> -->
                  </ul>
                </div>
              </div>
            </nav>

            <!-- Navbar End -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TokenService from "@/services/TokenService";
export default {
  name: "app-header",
  data() {
    return {
      isAuthorized: this.$store.state.isAuthorized,
      isDrop: false,
      isDesc: false,
      isLeft: false,

      isHeader: true,

      headerName: "",
      isHeaderName: false,
    };
  },
  mounted() {
    this.headerName = window.localStorage.getItem("Ism");
    // console.log(this.headerName)
  },
  methods: {
    removeAuth() {
      TokenService.removeToken();
      const params = {
        name: "",
        isAuthorize: false,
      };
      this.$store.commit("checkAuthorize", params);
      // this.$router.go()
    },

    goHome() {
      this.$router.push({ path: "/" });
    },
  }
};
</script>
<style lang="scss">
$cviolet: #712cf9;

.circle-btn {
  position: absolute;
  right: 12px;
  top: calc(55% - 12px);
}

.form-check-input:checked {
  background-color: $cviolet !important;
  border-color: $cviolet !important;
}

.account {
  position: relative;
}

.accountName {
  position: relative;
}

.headerContainer {
  &.ChangedB {
    background-color: grey;
    border-radius: 0 !important;

    .container {
      .text-center {
        .headerWrapper {
          .switcher {
            .navbar {
              .nav-item {
                a {
                  color: #fff;
                }

                ul {
                  .dropdown-item {
                    color: $cviolet;
                  }
                }
              }
            }
          }

          h5 {
            color: #fff;
          }

          .orgIcon {
            z-index: 49;
            color: #fff;
          }
        }
      }
    }
  }
}

.collapseHeader {
  .nav-item {
    a {
      cursor: pointer;
    }
  }
}

.foundAccs {
  position: absolute;
  top: 110%;
  display: flex;
  flex-direction: column;
  z-index: 49;
  background: #fff;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  row-gap: 8px;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.32s linear;

  &.foundAccActive {
    transform: scaleY(1);
  }
}

.headerWrapper {
  align-items: center;
}

i {
  transition: 0.32s linear;

  &.active {
    transform: rotateZ(180deg);

    &.deactive {
      transform: rotateZ(0);
    }
  }
}

ul.dropNews {
  position: absolute;
  right: 100%;
  top: 25%;
  list-style: none;
  padding: 0;
  background: #fff;
  z-index: 49;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transform-origin: right;

  &.newsDeactive {
    transform: scaleX(0);
  }

  &.newsActive {
    transform: scaleX(1);
  }
}

.orgIcon {
  cursor: pointer;
}

.logo {
  display: flex;
  column-gap: 12px;

  h5 {
    cursor: pointer;
  }

  i {
    cursor: pointer;
  }
}

.switcher {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.switchIcon {
  cursor: pointer;
  justify-self: flex-start;
}

ul.dropdown-menu {
  transform: scaleY(0);
  transition: transform 0.32s linear;
  transform-origin: top;

  &.show {
    transform: scaleY(1);
  }

  li {
    a {
      .bi {
        position: absolute;
        left: 0;
      }
    }
  }
}

.dropdown-toggle {
  &::after {
    transition: transform 0.32s linear;
  }

  &.show {
    &::after {
      transform: rotateZ(180deg);
    }
  }
}

@media screen and (max-width: 990px) {
  .collapseHeader {
    display: block !important;
    position: absolute;
    top: 150%;
    right: 20%;
    background: #fff;
    z-index: 99;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: fit-content;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: 12px;
    transition: transform 0.32s linear;
    transform-origin: top;

    &.navActive {
      transform: scaleY(1);
    }

    &.navDeactive {
      transform: scaleY(0);
    }
  }
}
</style>

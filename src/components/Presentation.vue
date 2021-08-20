<template>
  <div class="presentation">
    <div class="presentation__container">
      <div class="presentation__container__logo">
        <h1>Pão bom</h1>
      </div>
      <div class="presentation__container__image">
        <div class="presentation__container__image__one">
          <img src="@/assets/biscoitoo.jpg" alt="biscoito" />
        </div>
        <div class="presentation__container__image__two">
          <img src="@/assets/bolo.jpg" alt="bolo" />
        </div>
        <div class="presentation__container__image__three">
          <img src="@/assets/bolinho.jpg" alt="bolinho" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  animation: animate 2s ease-in-out forwards;
}
@keyframes animate {
  0% {
    transform: translatey(-800px);
    color: #fff;
  }
  60% {
    transform: translatey(0);
  }
  80% {
    transform: translatey(-100px);
  }
  100% {
    transform: translatey(0);
  }
}
// @keyframes aanimatefour {
//   0% {
//     transform: translatey(800px);
//     color: #fff;
//   }
//   60% {
//     transform: translatey(0);
//   }
//   80% {
//     transform: translatey(100px);
//   }
//   100% {
//     transform: translatey(0);
//   }
// }
@keyframes animatetwo {
  0% {
    transform: translatex(-800px);
    color: #fff;
  }
  60% {
    transform: translatex(0);
  }
  80% {
    transform: translatex(-100px);
  }
  100% {
    transform: translatex(0);
  }
}
@keyframes animatethree {
  0% {
    transform: translatex(800px);
    color: #fff;
  }
  60% {
    transform: translatex(0);
  }
  80% {
    transform: translatex(100px);
  }
  100% {
    transform: translatex(0);
  }
}
.presentation {
  height: 700px;
  // background: #fff8dc;
  background: rgba(253, 253, 253, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__logo {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 100px;
        color: #cd9b1d;
        text-shadow: 6px 6px 9px #8b4c39;
        font-family: "Kaushan Script", cursive;
      }
    }
    &__image {
      width: 100%;
      display: flex;
      justify-content: center;
      &__one {
        animation: animatetwo 2s ease-in-out forwards;
      }
      &__two {
        animation: animatefour 2s ease-in-out forwards;
      }
      &__three {
        animation: animatethree 2s ease-in-out forwards;
      }
      img {
        width: 250px;
        height: 250px;
        margin: 0 20px 0 20px;
      }
    }
  }
}
</style>

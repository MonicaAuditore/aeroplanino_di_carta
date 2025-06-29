<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    style="background-color: var(--blue)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <!-- <img :src="logo" alt="Logo" height="40" /> -->
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          class="navbar-nav w-100 d-flex flex-column flex-lg-row align-items-center justify-content-lg-end gap-3"
        >
          <li class="nav-item">
            <a class="nav-link" href="#sezione1">01</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sezione2">02</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sezione3">03</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sezione4">04</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sezione5">05</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sezione6">06</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contatti">Verso nuovi cieli</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from "@/assets/logo.png";
</script>

<style>
.navbar-toggler:focus {
  outline: none;
  box-shadow: none;
}
</style>

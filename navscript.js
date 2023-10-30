document.addEventListener("DOMContentLoaded", function () {
	const navbarToggler = document.querySelector(".navbar-toggler");
	const preloader = document.getElementById("preloader");
  
	// เพิ่มคลาส "active" เมื่อเมาส์ชี้ที่ navbar-toggler
	navbarToggler.addEventListener("mouseover", function () {
	  navbarToggler.classList.add("active");
	});
  
	// ลบคลาส "active" เมื่อเมาส์ออกจาก navbar-toggler
	navbarToggler.addEventListener("mouseout", function () {
	  navbarToggler.classList.remove("active");
	});
  
	// ให้เว็บเริ่มเข้าถึง
	window.addEventListener("load", function () {
	  // ซ่อน preloader
	  preloader.style.display = "none";
  
	  // เพิ่มคลาส "loaded" เพื่อเปลี่ยนสีของเว็บ
	  document.body.classList.add("loaded");
	});
  });
document.addEventListener("DOMContentLoaded", function () {
	const brand = document.querySelector(".brand-color-change");
  
	// เพิ่มคลาส "active" เมื่อเมาส์ชี้ที่ Navbar Brand
	brand.addEventListener("mouseover", function () {
	  brand.classList.add("active");
	});
  
	// ลบคลาส "active" เมื่อเมาส์ออกจาก Navbar Brand
	brand.addEventListener("mouseout", function () {
	  brand.classList.remove("active");
	});
  });


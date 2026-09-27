(function ($) {
	("use strict");

	setTimeout(function () {
		gsap.registerPlugin(ScrollTrigger);

		// animation1
		const tm_gsap_split_text = document.querySelector(".tm-split-text");
		if (tm_gsap_split_text) {
			setTimeout(function () {
				var st = $("document").find(".tm-split-text");
				if (st.length == 0) return;
				gsap.registerPlugin(SplitText);
				st.each(function (index, el) {
					el.split = new SplitText(el, {
						type: "lines,words,chars",
						linesClass: "split-line",
					});
					gsap.set(el, { perspective: 400 });

					if ($(el).hasClass("split-in-fade")) {
						$(el).addClass("active");
						gsap.set(el.split.chars, {
							opacity: 0,
							ease: "Back.easeOut",
						});
					}
					if ($(el).hasClass("split-in-right")) {
						gsap.set(el.split.chars, {
							opacity: 0,
							x: "50",
							ease: "Back.easeOut",
						});
					}
					if ($(el).hasClass("split-in-left")) {
						gsap.set(el.split.chars, {
							opacity: 0,
							x: "-50",
							ease: "circ.out",
						});
					}
					if ($(el).hasClass("split-in-up")) {
						gsap.set(el.split.chars, {
							opacity: 0,
							y: "80",
							ease: "circ.out",
						});
					}
					if ($(el).hasClass("split-in-down")) {
						gsap.set(el.split.chars, {
							opacity: 0,
							y: "-80",
							ease: "circ.out",
						});
					}
					if ($(el).hasClass("split-in-rotate")) {
						gsap.set(el.split.chars, {
							opacity: 0,
							rotateX: "50deg",
							ease: "circ.out",
						});
					}
					if ($(el).hasClass("split-in-scale")) {
						gsap.set(el.split.chars, {
							opacity: 0,
							scale: "0.5",
							ease: "circ.out",
						});
					}
					el.anim = gsap.to(el.split.chars, {
						scrollTrigger: {
							trigger: el,
							toggleActions: "restart pause resume reverse",
							start: "top 90%",
						},
						x: "0",
						y: "0",
						rotateX: "0",
						scale: 1,
						opacity: 1,
						duration: 0.8,
						stagger: 0.02,
					});
				});
			}, 200);
		}

		// animation1
		const tm_gsap_move_animation1 = document.querySelector(
			".tm-gsap-move-animation1",
		);
		if (tm_gsap_move_animation1) {
			var tm_gsap_animation1 = gsap.timeline({
				scrollTrigger: {
					animation: tm_gsap_animation1,
					trigger: tm_gsap_move_animation1,
					start: "top 95%",
					end: "top -50%",
					scrub: 4,
					toggleActions: "play reverse play reverse",
					markers: false,
				},
			});
			tm_gsap_animation1.from(tm_gsap_move_animation1, { xPercent: 50 });
		}

		// animation2
		const tm_gsap_move_animation2 = document.querySelector(
			".tm-gsap-move-animation2",
		);
		if (tm_gsap_move_animation2) {
			var tm_gsap_animation2 = gsap.timeline({
				scrollTrigger: {
					animation: tm_gsap_animation2,
					trigger: tm_gsap_move_animation2,
					start: "top 150%",
					end: "top -50%",
					scrub: 3,
					toggleActions: "play reverse play reverse",
					markers: false,
				},
			});
			tm_gsap_animation2.from(
				tm_gsap_move_animation2,
				{ xPercent: 50, yPercent: -10, scale: 0.3 },
				"<=.5",
			);
		}

		// animation3
		const tm_gsap_move_animation3 = document.querySelector(
			".tm-gsap-move-animation3",
		);
		if (tm_gsap_move_animation3) {
			var tm_gsap_animation3 = gsap.timeline({
				scrollTrigger: {
					animation: tm_gsap_animation3,
					trigger: tm_gsap_move_animation3,
					start: "top 150%",
					end: "top -50%",
					scrub: 3,
					toggleActions: "play reverse play reverse",
					markers: false,
				},
			});
			tm_gsap_animation3.from(
				tm_gsap_move_animation3,
				{
					xPercent: 70,
					yPercent: -50,
					scale: 0.3,
					rotate: -20,
					opacity: 0.3,
				},
				"<=.5",
			);
		}
	}, 2300);

	// Button inner move effect
	const btnMove = gsap.utils.toArray(".btn-move");
	const btnItems = gsap.utils.toArray(".btn-item");

	btnMove.forEach((btn, i) => {
		const item = btnItems[i];

		btn.addEventListener("mousemove", (e) => {
			const rect = btn.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const range = 80;

			gsap.to(item, {
				duration: 0.3,
				x: ((x - rect.width / 2) / rect.width) * range,
				y: ((y - rect.height / 2) / rect.height) * range,
				scale: 1.2,
				ease: "power2.out",
			});
		});

		btn.addEventListener("mouseleave", () => {
			gsap.to(item, {
				duration: 0.3,
				x: 0,
				y: 0,
				scale: 1,
				ease: "power2.out",
			});
		});
	});

	gsap.utils.toArray(".tm-gsap-animate-left").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "-=150" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false },
			);
	});
	gsap.utils.toArray(".tm-gsap-animate-right").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "+=150" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false },
			);
	});
	gsap.utils.toArray(".tm-gsap-animate-top").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, y: "+=150" },
				{ opacity: 1, y: 0, duration: 1, immediateRender: false },
			);
	});
	gsap.utils.toArray(".tm-gsap-animate-bottom").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, y: "-=150" },
				{ opacity: 1, y: 0, duration: 1, immediateRender: false },
			);
	});

	gsap.utils.toArray(".tm-gsap-animate-circle").forEach((el, index) => {
		let arspin = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 100%",
				end: "top -50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		arspin
			.set(el, { transformOrigin: "center center" })
			.fromTo(
				el,
				{ rotate: 0 },
				{ rotate: 180, duration: 2, immediateRender: false },
			);
	});

	gsap.utils.toArray(".tm-gsap-animate-horizontal").forEach((el, index) => {
		let arspin = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 100%",
				end: "top -50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		arspin
			.set(el, { transformOrigin: "center center" })
			.fromTo(
				el,
				{ xPercent: -20 },
				{ xPercent: 50, duration: 2, immediateRender: false },
			);
	});

	gsap.utils.toArray(".tm-gsap-img-parallax").forEach(function (container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: 0.5,
			},
		});
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		});
	});

	// Text on Windows  Animation Start
	// Animation-1
	let tHero = gsap.timeline();

	let heading_title = new SplitText(".sec-title-1", { type: "chars" });
	let heading_char = heading_title.chars;

	tHero.from(heading_char, {
		rotate: 20,
		ease: "back.out",
		opacity: 0,
		duration: 2,
		stagger: 0.1,
	});

	if ($(".tp-project-5-2-area").length > 0) {
		let project_text = gsap.timeline({
			scrollTrigger: {
				trigger: ".tp-project-5-2-area",
				start: "top center-=350",
				end: "bottom 105%",
				pin: ".tp-project-5-2-title",
				markers: false,
				pinSpacing: false,
				scrub: 1,
			},
		});
		project_text.set(".tp-project-5-2-title", {
			scale: 1,
			duration: 2,
		});
		project_text.to(".tp-project-5-2-title", {
			scale: 3.5,
			duration: 2,
		});
		project_text.to(
			".tp-project-5-2-title",
			{
				scale: 3.5,
				duration: 2,
			},
			"+=2",
		);

		//  project_text.to(".tp-project-5-2-title", {
		//     autoAlpha: 0,
		//     duration: 2
		// });
	}

	//Image Reveal Animation  used
	let imgs_reveal = document.querySelectorAll(".img-reveal");

	imgs_reveal.forEach((container) => {
		let image = container.querySelector("img");
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				toggleActions: "restart none none reset",
			},
		});

		tl.set(container, { autoAlpha: 1 });
		tl.from(container, 1.5, {
			xPercent: -100,
			ease: Power2.out,
		});
		tl.from(image, 1.5, {
			xPercent: 100,
			scale: 1.3,
			delay: -1.5,
			ease: Power2.out,
		});
	});

	// Des work panel animation
	if (document.querySelector(".des-work-wrap")) {
		const pr = ScrollTrigger.matchMedia();

		pr.add("(min-width: 1199px)", () => {
			const sections = document.querySelectorAll(".des-work-panel");
			const wrap = document.querySelector(".des-work-wrap");

			if (!sections.length || !wrap) return;

			// Initial state
			gsap.set(sections, { scale: 1 });

			// Animate each section except the last one
			sections.forEach((section, index) => {
				const isLast = index === sections.length - 1;

				gsap.to(section, {
					scale: isLast ? 1 : 0.8,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: "bottom 60%",
						scrub: true,
						pin: true,
						pinSpacing: false,
						endTrigger: wrap,
						markers: false,
					},
				});
			});

			// Cleanup on condition change
			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		});
	}

	// Top fiexed panel animation
	document.addEventListener("DOMContentLoaded", function () {
		gsap.registerPlugin(ScrollTrigger);

		let cards = gsap.utils.toArray(".tp-stacked-card");
		let leftContent = document.querySelector(".tp-stacked-content");

		if (!cards.length || !leftContent) return;

		// 👉 Left content sticky until cards end
		ScrollTrigger.create({
			trigger: ".tp-panel-pin-area",
			start: "top top",
			end: "bottom bottom",
			pin: leftContent,
			pinSpacing: false,
		});

		// 👉 Cards stacked fixed + scale
		cards.forEach((card, i) => {
			// Pin each card
			ScrollTrigger.create({
				trigger: card,
				start: "top 120px",
				endTrigger: ".tp-panel-pin-area",
				end: "bottom bottom",
				pin: true,
				pinSpacing: false,
			});

			// Scale previous card
			if (i !== cards.length - 1) {
				gsap.to(card, {
					scale: 0.8,
					ease: "none",
					scrollTrigger: {
						trigger: cards[i + 1],
						start: "top 120px",
						end: "top 20%",
						scrub: true,
					},
				});
			}
		});
	});

	// Scroll right to left and left to right animation
	if (document.querySelector(".right-to-left-ani")) {
		let counterImgTL = gsap.timeline({
			scrollTrigger: {
				trigger: ".right-to-left-ani",
				start: "top 80%",
				end: "bottom 10%",
				scrub: 2,
				markers: false,
			},
		});
		counterImgTL.fromTo(
			".right-to-left-ani",
			{
				x: 200,
			},
			{
				x: 0,
				duration: 1.6,
			},
		);
	}

	if (document.querySelectorAll(".left-to-right-ani").length) {
		let elements = document.querySelectorAll(".left-to-right-ani");
		elements.forEach((el) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					end: "bottom 10%",
					scrub: 2,
					markers: false,
				},
			});

			tl.fromTo(el, { x: -200 }, { x: 0, duration: 1.6 });
		});
	}
})(jQuery);

if ($("#smooth-wrapper").length && $("#smooth-content").length) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
	gsap.config({
		nullTargetWarn: false,
	});
	let smoother = ScrollSmoother.create({
		wrapper: "#smooth-wrapper",
		content: "#smooth-content",
		smooth: 2,
		effects: true,
		smoothTouch: 0.1,
		normalizeScroll: false,
		ignoreMobileResize: true,
	});
}

  // Work section four steps animation
  if ($(".work-section-four").length) {
    let workBlocks = gsap.utils.toArray(".work-block-four");

    if (workBlocks.length > 0) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section-four",
          start: "top 120px",
          end: "bottom bottom",
          pin: ".sticky-wrapper",
          scrub: true,
        },
      });
      tl.to(".progress-active", { height: "100%", ease: "none" });

      workBlocks.forEach((block, index) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            $(".work-step-box .number").text(
              index + 1 + " / " + workBlocks.length,
            );
          },
          onEnterBack: () => {
            $(".work-step-box .number").text(
              index + 1 + " / " + workBlocks.length,
            );
          },
        });
      });
    }
  }

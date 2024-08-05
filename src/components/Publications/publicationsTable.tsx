import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import AAVSO from '../../../public/aavso square logo_1.png'
import AAS from '../../../public/aas.png'
import JDSO from '../../../public/jdso.png'
import AASP from '../../../public/aasp.png'
export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[1000px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {/* <Image
                  priority
                  width={200}
                  height={200}
                  src={active.largeSrc}
                  alt={active.title}
                  className="w-full h-10  sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                /> */}
                <div className="bg-black">

                </div>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row w-1000px justify-between items-center hover:bg-neutral-800 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={1500}
                  height={100}
                  src={card.smallSrc}
                  alt={card.title}
                  className={`h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top ${index === 2 ? 'min-w-[20px]' : ''}`}
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-200 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};


const cards = [
  {
    description: "Primary Author: American Astronomical Society",
    title: "Detecting Novel Damped Lyα Absorbers in the Intergalactic Medium",
    smallSrc: AAS,
    largeSrc: "https://c02.purpledshub.com/uploads/sites/48/2019/12/08-Alberto-Ibanez-Orion-Nebula-d32cbed.jpg",
    ctaText: "Read",
    ctaLink: "https://iopscience.iop.org/article/10.3847/2515-5172/ad5ce0",
    content: () => {
      return (
        <p>
          Damped Lyα (DLA) absorbers are a class of quasar absorption line systems that can be used to trace hydrogen evolution and study gas, composition, kinematics, and stellar formation in galaxies or the intergalactic medium in the early universe. 
          In this study, the number of DLA absorbers found with a deep learning algorithm is augmented using metal Mg ii absorbers as signposts. 
          The artificial training data was generated by inserting synthetic absorption lines into spectra. Using previously identified DLAs as a test set, the model returned a 94.6% accuracy score and 1197 new DLA absorbers, which nearly doubles the previously known number of samples within the search catalog. 
          Additionally, the column density and Doppler broadening are measured on the newly found DLA absorbers through Voigt profile fitting.
        </p>
      );
    },
  },
  {
    description: "Corresponding Author: Journal of the American Association of Variable Star Observers",
    title: "Investigation of the M13 Globular Cluster: Characteristics and Pulsation Periods of Its RR Lyrae Stars V8, V31, and V54",
    smallSrc: AAVSO,
    largeSrc: AAVSO,
    ctaText: "Read",
    ctaLink: "https://apps.aavso.org/jaavso/article/3892",
    content: () => {
      return (
        <p>
          Images of the Messier 13 (M13/NGC 6205) globular cluster were requested from the Las Cumbres Global Observatory’s 
          40-centimeter telescope to investigate the chemical composition and characteristics of the cluster along with three of its RR Lyrae 
          variable stars. Gaia Data Release 3 data were used to fit an isochrone by varying parameters such as distance, reddening, metallicity, 
          and age. The estimates obtained for these parameters were within uncertainty of the corresponding literature values despite a large 
          range of metallicities that gave an appropriate fit; however, a significantly different proper motion in Right Ascension was used 
          to screen for cluster membership. In addition, the periods for three of the RR Lyrae stars—V8, V31, V54—were confirmed using 
          phase dispersion minimization (string length and standard deviation methods) as well as the Lomb-Scargle method. The colors 
          of three RR Lyrae stars were also investigated through color analysis using data in the Johnson-Cousins V and Sloan Digital Sky 
          Survey I-prime filters. ASAS-SN Sky Patrol data were used to determine if two select stars, V8 and V31, were undergoing period 
          evolution. Because of inconclusive data, further investigation is suggested. Finally, the period-luminosity-metallicity (PLM) 
          relationship was applied to recompute the distance to the cluster. The average derived PLM distance of 7.1 kpcs was a close match 
          to previous distance estimates from the literature.
        </p>
      );
    },
  },

  {
    description: "Primary Author: The Journal of Double Star Observations",
    title: "A Study of 5 Physical Double Star Systems",
    smallSrc: JDSO,
    largeSrc: JDSO,
    ctaText: "Read",
    ctaLink: "http://www.jdso.org/volume19/number3/Lee_295_308.pdf",
    content: () => {
      return (
        <p>
          The five double star systems, HJ 3262, STF 364, ES 889, HJ 3789, and STF 401AB were queried from the 
          Washington Double Star Catalog (WDS) and analyzed to investigate the probability of a gravitational 
          attraction within the system and the possibility of a trend in the relative motion of the stars. Three of the 
          double stars were imaged with the Las Cumbres Observatory’s 40-centimeter telescopes and two were 
          measured with the Las Cumbres Observatory’s PlaneWave DeltaRho telescope. Images were reduced with 
          AstroImageJ and the position angles and the separations were measured. Previous measurements were used 
          to create historical data plots for all the systems with python. Those plots, along with the value of the 
          relative proper motion and the escape velocity calculated from the Gaia Data Release 3, suggest these 
          systems all exhibit either common proper motion or similar proper motion. For two systems (HJ 3262 and 
          HJ 3789), the stars are more than one light year apart making a gravitational relationship unlikely. For 
          ES889 and STF364, there is a possibility that the pairs are gravitationally bound. Finally, for STF 401AB 
          the evidence is insufficient to assess the likelihood of a gravitational relationship. Due to the high 
          uncertainty, it is worth making additional measurements to shed further light on the nature of these systems
        </p>
      );
    },
  },
  {
    description: "Presenter: American Astronomical Society (AAS)",
    title: "Investigation of the M13 Globular Cluster: Characteristics and Pulsation Periods of its RR Lyrae Stars",
    smallSrc: AASP,
    largeSrc: AASP,
    ctaText: "Read",
    ctaLink: "https://ui.adsabs.harvard.edu/abs/2024AAS...24320704L/abstract",
    content: () => {
      return (
        <p>
          Images of the Messier 13 (M13/NGC 6205) globular cluster were requested from the Las Cumbres Global Observatory’s 
          40-centimeter telescope to investigate the chemical composition and characteristics of the cluster along with three of its RR Lyrae 
          variable stars. Gaia Data Release 3 data were used to fit an isochrone by varying parameters such as distance, reddening, metallicity, 
          and age. The estimates obtained for these parameters were within uncertainty of the corresponding literature values despite a large 
          range of metallicities that gave an appropriate fit; however, a significantly different proper motion in Right Ascension was used 
          to screen for cluster membership. In addition, the periods for three of the RR Lyrae stars—V8, V31, V54—were confirmed using 
          phase dispersion minimization (string length and standard deviation methods) as well as the Lomb-Scargle method. The colors 
          of three RR Lyrae stars were also investigated through color analysis using data in the Johnson-Cousins V and Sloan Digital Sky 
          Survey I-prime filters. ASAS-SN Sky Patrol data were used to determine if two select stars, V8 and V31, were undergoing period 
          evolution. Because of inconclusive data, further investigation is suggested. Finally, the period-luminosity-metallicity (PLM) 
          relationship was applied to recompute the distance to the cluster. The average derived PLM distance of 7.1 kpcs was a close match 
          to previous distance estimates from the literature.
        </p>
      );
    },
  },
];

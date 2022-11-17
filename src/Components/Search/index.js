import React, { useEffect, useRef, useState } from "react";
import { GoLocation, GoSearch } from "react-icons/go";
import {
  InputBox,
  SearchContainer,
  SearchOptions,
  SearchOptionsContainer,
  StyledInput,
  Dot,
  LoadingContainer,
} from "./SearchElements";
import axios from "axios";
import useDebounce from "./useDebounce";
import { AnimatePresence } from "framer-motion";

function Search({
  cityName,
  setCityName,
  setStateCode,
  setCountryCode,
  setIconReload,
}) {
  const [querry, setQuerry] = useState(`${cityName}`);
  const [citiesList, setCitiesList] = useState();
  const [loading, setLoading] = useState(true);

  //i needed to delay search because of limitation to one api call per sec
  const debounceSearch = useDebounce(querry, 1500);

  const handleSearch = (e) => {
    setQuerry(e.target.value);
    setLoading(true);
  };

  const handleCityClick = (e) => {
    setCityName(e.target.innerText.split(", ")[0]);
    setStateCode(e.target.innerText.split(", ")[1]);
    setCountryCode(e.target.innerText.split(", ")[2]);
    setOpen(false);
    setIconReload(true);
  };

  useEffect(() => {
    const geocodingApiCall = () => {
      axios
        .get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${debounceSearch}&limit=5&appid=8d1c8d95c761fd37fdb1d1e1d20882ed`
        )
        .then(function (response) {
          setCitiesList(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    if (debounceSearch) {
      geocodingApiCall();
    }
  }, [debounceSearch]);

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClicks = (event) => {
      if (open && ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleOutsideClicks);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleOutsideClicks);
    };
  }, [open]);

  const searchRef = useRef();
  const [searchWidth, setSearchWdth] = useState();

  useEffect(() => {
    setSearchWdth(searchRef.current.offsetWidth);
  }, []);

  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const DotVariants = {
    initial: {
      y: "0%",
    },
    animate: {
      y: "-50%",
    },
  };

  const DotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  const optionsContainer = {
    hide: {
      opacity: 0,
      tranistion: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
    },
    show: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const input = {
    hide: {
      background: "rgba(255, 255, 255, 0.19)",
      borderRadius: "16px",
      tranistion: { duration: 0.5 },
    },
    show: {
      background: "rgba(255, 255, 255, 1)",
      borderRadius: "16px 16px 0 0",
      transition: { duration: 0.5 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <SearchContainer
        ref={searchRef}
        variants={input}
        initial="hide"
        animate={open ? "show" : "hide"}
        exit="hide"
      >
        <InputBox>
          <GoLocation
            style={{
              minWidth: "25px",
              minHeight: "25px",
              margin: "0 1rem",
              color: open && "#000",
            }}
          />
          <StyledInput
            onChange={(e) => handleSearch(e)}
            value={querry}
            onClick={() => setOpen(true)}
            onFocus={(e) => e.target.select()}
          />
          <GoSearch
            style={{
              minWidth: "25px",
              minHeight: "25px",
              margin: "0 1rem",
              color: open && "#000",
            }}
          />
        </InputBox>
        <AnimatePresence mode="wait">
          <SearchOptionsContainer
            ref={ref}
            style={{ display: open ? "block" : "none", width: searchWidth }}
            variants={optionsContainer}
            initial="hide"
            animate={open ? "show" : "hide"}
            exit="hide"
          >
            {loading ? (
              <LoadingContainer
                variants={ContainerVariants}
                initial="initial"
                animate="animate"
              >
                <Dot variants={DotVariants} transition={DotTransition} />
                <Dot variants={DotVariants} transition={DotTransition} />
                <Dot variants={DotVariants} transition={DotTransition} />
              </LoadingContainer>
            ) : (
              citiesList.map((item, i) => {
                return (
                  <SearchOptions key={i} onClick={(e) => handleCityClick(e)}>
                    {item.name}, {item.state}, {item.country}
                  </SearchOptions>
                );
              })
            )}
          </SearchOptionsContainer>
        </AnimatePresence>
      </SearchContainer>
    </AnimatePresence>
  );
}

export default Search;

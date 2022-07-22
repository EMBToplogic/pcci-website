import React from "react";

// Components

import Header from "../Header";

// CSS

import chaptersStyles from "../../styles/chapters/Chapters.module.css";

const sampleData = [
  {
    _immutable: {
      allowUndo: true,
      currentContent: {
        entityMap: {},
        blockMap: {
          "3ictb": {
            key: "3ictb",
            type: "unstyled",
            text: "Information Dissemination",
            characterList: [
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
            ],
            depth: 0,
            data: {},
          },
          "4mpkd": {
            key: "4mpkd",
            type: "unstyled",
            text: "",
            characterList: [],
            depth: 0,
            data: {},
          },
          "98v0p": {
            key: "98v0p",
            type: "unstyled",
            text: "All members are included in our mailing list via e-mail. On a near daily basis, events, activities, membership concerns, public holidays, changes in administration, training, workshops, ground-breaking ceremonies and all SBMA public information is disseminated to members.",
            characterList: [
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
            ],
            depth: 0,
            data: {},
          },
        },
        selectionBefore: {
          anchorKey: "98v0p",
          anchorOffset: 271,
          focusKey: "98v0p",
          focusOffset: 271,
          isBackward: false,
          hasFocus: true,
        },
        selectionAfter: {
          anchorKey: "98v0p",
          anchorOffset: 272,
          focusKey: "98v0p",
          focusOffset: 272,
          isBackward: false,
          hasFocus: true,
        },
      },
      decorator: {
        _decorators: [{}],
      },
      directionMap: {
        "3ictb": "LTR",
        "4mpkd": "LTR",
        "98v0p": "LTR",
      },
      forceSelection: false,
      inCompositionMode: false,
      inlineStyleOverride: null,
      lastChangeType: "insert-characters",
      nativelyRenderedContent: {
        entityMap: {},
        blockMap: {
          "3ictb": {
            key: "3ictb",
            type: "unstyled",
            text: "Information Dissemination",
            characterList: [
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-18",
                  "fontfamily-Poppins, sans-serif",
                  "BOLD",
                ],
                entity: null,
              },
            ],
            depth: 0,
            data: {},
          },
          "4mpkd": {
            key: "4mpkd",
            type: "unstyled",
            text: "",
            characterList: [],
            depth: 0,
            data: {},
          },
          "98v0p": {
            key: "98v0p",
            type: "unstyled",
            text: "All members are included in our mailing list via e-mail. On a near daily basis, events, activities, membership concerns, public holidays, changes in administration, training, workshops, ground-breaking ceremonies and all SBMA public information is disseminated to members.",
            characterList: [
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
              {
                style: [
                  "color-rgb(255,255,255)",
                  "bgcolor-rgba(255,255,255,0.2)",
                  "fontsize-14",
                  "fontfamily-Poppins, sans-serif",
                ],
                entity: null,
              },
            ],
            depth: 0,
            data: {},
          },
        },
        selectionBefore: {
          anchorKey: "98v0p",
          anchorOffset: 271,
          focusKey: "98v0p",
          focusOffset: 271,
          isBackward: false,
          hasFocus: true,
        },
        selectionAfter: {
          anchorKey: "98v0p",
          anchorOffset: 272,
          focusKey: "98v0p",
          focusOffset: 272,
          isBackward: false,
          hasFocus: true,
        },
      },
      redoStack: [],
      selection: {
        anchorKey: "98v0p",
        anchorOffset: 272,
        focusKey: "98v0p",
        focusOffset: 272,
        isBackward: false,
        hasFocus: true,
      },
      treeMap: {
        "3ictb": [
          {
            start: 0,
            end: 25,
            decoratorKey: null,
            leaves: [
              {
                start: 0,
                end: 25,
              },
            ],
          },
        ],
        "66jn8": [
          {
            start: 0,
            end: 22,
            decoratorKey: null,
            leaves: [
              {
                start: 0,
                end: 22,
              },
            ],
          },
        ],
        dkbce: [
          {
            start: 0,
            end: 14,
            decoratorKey: null,
            leaves: [
              {
                start: 0,
                end: 14,
              },
            ],
          },
        ],
        "25p62": [
          {
            start: 0,
            end: 6,
            decoratorKey: null,
            leaves: [
              {
                start: 0,
                end: 6,
              },
            ],
          },
        ],
        "4mpkd": [
          {
            start: 0,
            end: 0,
            decoratorKey: null,
            leaves: [
              {
                start: 0,
                end: 0,
              },
            ],
          },
        ],
        "98v0p": [
          {
            start: 0,
            end: 272,
            decoratorKey: null,
            leaves: [
              {
                start: 0,
                end: 272,
              },
            ],
          },
        ],
      },
      undoStack: [
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Dissemination",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "4mpkd": {
              key: "4mpkd",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
            "98v0p": {
              key: "98v0p",
              type: "unstyled",
              text: "All members are included in our mailing list via e-mail. On a near daily basis, events, activities, membership concerns, public holidays, changes in administration, training, workshops, ground-breaking ceremonies and all SBMA public information is disseminated to members",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "98v0p",
            anchorOffset: 273,
            focusKey: "98v0p",
            focusOffset: 273,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "98v0p",
            anchorOffset: 271,
            focusKey: "98v0p",
            focusOffset: 271,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Dissemination",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "4mpkd": {
              key: "4mpkd",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
            "98v0p": {
              key: "98v0p",
              type: "unstyled",
              text: "All members are included in our mailing list via e-mail. On a near daily basis, events, activities, membership concerns, public holidays, changes in administration, training, workshops, ground-breaking ceremonies and all SBMA public information is disseminated to members. ",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-14",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "98v0p",
            anchorOffset: 0,
            focusKey: "98v0p",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "98v0p",
            anchorOffset: 273,
            focusKey: "98v0p",
            focusOffset: 273,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Dissemination",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "4mpkd": {
              key: "4mpkd",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
            "98v0p": {
              key: "98v0p",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "4mpkd",
            anchorOffset: 0,
            focusKey: "4mpkd",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "98v0p",
            anchorOffset: 0,
            focusKey: "98v0p",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Dissemination",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "4mpkd": {
              key: "4mpkd",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 25,
            focusKey: "3ictb",
            focusOffset: 25,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "4mpkd",
            anchorOffset: 0,
            focusKey: "4mpkd",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Dissemination",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 26,
            focusKey: "3ictb",
            focusOffset: 26,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 25,
            focusKey: "3ictb",
            focusOffset: 25,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Disseminationv",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 25,
            focusKey: "3ictb",
            focusOffset: 25,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 26,
            focusKey: "3ictb",
            focusOffset: 26,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Dissemination",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                    "BOLD",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 25,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: true,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 25,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: true,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Dissemination",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 26,
            focusKey: "3ictb",
            focusOffset: 26,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 25,
            focusKey: "3ictb",
            focusOffset: 25,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Information Dissemination ",
              characterList: [
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [
                    "color-rgb(255,255,255)",
                    "bgcolor-rgba(255,255,255,0.2)",
                    "fontsize-18",
                    "fontfamily-Poppins, sans-serif",
                  ],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 5,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 26,
            focusKey: "3ictb",
            focusOffset: 26,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "Hello",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 5,
            focusKey: "3ictb",
            focusOffset: 5,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "25p62",
            focusOffset: 6,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This is a styled list.",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            dkbce: {
              key: "dkbce",
              type: "unordered-list-item",
              text: "This is a list",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "25p62": {
              key: "25p62",
              type: "unordered-list-item",
              text: "List 2",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "25p62",
            anchorOffset: 0,
            focusKey: "25p62",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "25p62",
            anchorOffset: 6,
            focusKey: "25p62",
            focusOffset: 6,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This is a styled list.",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            dkbce: {
              key: "dkbce",
              type: "unordered-list-item",
              text: "This is a list",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "25p62": {
              key: "25p62",
              type: "unordered-list-item",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "dkbce",
            anchorOffset: 14,
            focusKey: "dkbce",
            focusOffset: 14,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "25p62",
            anchorOffset: 0,
            focusKey: "25p62",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This is a styled list.",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            dkbce: {
              key: "dkbce",
              type: "unordered-list-item",
              text: "This is a list",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "dkbce",
            anchorOffset: 14,
            focusKey: "dkbce",
            focusOffset: 14,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "dkbce",
            anchorOffset: 14,
            focusKey: "dkbce",
            focusOffset: 14,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This is a styled list.",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            dkbce: {
              key: "dkbce",
              type: "unstyled",
              text: "This is a list",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "dkbce",
            anchorOffset: 0,
            focusKey: "dkbce",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "dkbce",
            anchorOffset: 14,
            focusKey: "dkbce",
            focusOffset: 14,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This is a styled list.",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            dkbce: {
              key: "dkbce",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "66jn8",
            anchorOffset: 22,
            focusKey: "66jn8",
            focusOffset: 22,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "dkbce",
            anchorOffset: 0,
            focusKey: "dkbce",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This is a styled list.",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "66jn8",
            anchorOffset: 0,
            focusKey: "66jn8",
            focusOffset: 22,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "66jn8",
            anchorOffset: 0,
            focusKey: "66jn8",
            focusOffset: 22,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This is a styled list.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "66jn8",
            anchorOffset: 7,
            focusKey: "66jn8",
            focusOffset: 7,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "66jn8",
            anchorOffset: 22,
            focusKey: "66jn8",
            focusOffset: 22,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This is",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "66jn8",
            anchorOffset: 9,
            focusKey: "66jn8",
            focusOffset: 9,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "66jn8",
            anchorOffset: 7,
            focusKey: "66jn8",
            focusOffset: 7,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "This iss ",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "66jn8",
            anchorOffset: 0,
            focusKey: "66jn8",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "66jn8",
            anchorOffset: 9,
            focusKey: "66jn8",
            focusOffset: 9,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
            "66jn8": {
              key: "66jn8",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 21,
            focusKey: "3ictb",
            focusOffset: 21,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "66jn8",
            anchorOffset: 0,
            focusKey: "66jn8",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is a test. Bruh.",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 8,
            focusKey: "3ictb",
            focusOffset: 8,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 21,
            focusKey: "3ictb",
            focusOffset: 21,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is ",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 9,
            focusKey: "3ictb",
            focusOffset: 9,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 8,
            focusKey: "3ictb",
            focusOffset: 8,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "This is  ",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 9,
            focusKey: "3ictb",
            focusOffset: 9,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 4,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "test",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 4,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 4,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "test",
              characterList: [
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
                {
                  style: ["BOLD"],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 4,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 4,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "test",
              characterList: [
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
                {
                  style: [],
                  entity: null,
                },
              ],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 4,
            focusKey: "3ictb",
            focusOffset: 4,
            isBackward: false,
            hasFocus: true,
          },
        },
        {
          entityMap: {},
          blockMap: {
            "3ictb": {
              key: "3ictb",
              type: "unstyled",
              text: "",
              characterList: [],
              depth: 0,
              data: {},
            },
          },
          selectionBefore: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: false,
            hasFocus: false,
          },
          selectionAfter: {
            anchorKey: "3ictb",
            anchorOffset: 0,
            focusKey: "3ictb",
            focusOffset: 0,
            isBackward: false,
            hasFocus: false,
          },
        },
      ],
    },
  },
];

const ChaptersServices = ({ args }) => {
  return (
    <div className={chaptersStyles.chapters_services}>
      <Header
        title={"Services"}
        style={{
          color: "var(--white)",
        }}
        customButton={
          <span style={{ color: "var(--white)" }}>{args[0].servicesTitle}</span>
        }
      />
      <div
        className='subpage_paragraph'
        style={{
          color: "var(--white)",
        }}
      >
        {args.servicesDesc}
        <div className={chaptersStyles.chapter_services_tbl}>
          {args[0].services.map((service) => {
            return (
              <React.Fragment key={service.id}>
                <div className={chaptersStyles.chapter_services_container}>
                  <div className={chaptersStyles.chapter_services_title}>
                    {service.title}
                  </div>
                  <div>{service.description}</div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChaptersServices;

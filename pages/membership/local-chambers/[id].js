import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const Chambers = ({ initialChambers }) => {
  console.log(initialChambers);
  return <div></div>;
};

export async function getServerSideProps() {
  const chamber = await prisma.chambers.findMany();
  return {
    props: {
      initialChambers: chamber,
    },
  };
}

export default Chambers;

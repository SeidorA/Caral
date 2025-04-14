import { IconGallery, IconItem } from '@storybook/blocks';
import { CaralIcon, Icons } from 'iconcaral2';
import React from 'react';
import { iconGroups } from './icons';

const nombres = iconGroups.nombres

const movilidad = iconGroups.movilidad
const financial = iconGroups.financial
const Buildings = iconGroups.Buildings
const People = iconGroups.People
const Health = iconGroups.Health
const Contact = iconGroups.Contact
const Nature = iconGroups.Nature
const Bussiness = iconGroups.Bussiness
const innovation = iconGroups.innovation
const Recovery = iconGroups.Recovery
const Sales = iconGroups.Sales
const Others = iconGroups.Others
const Arrows = iconGroups.Arrows
const Brands = iconGroups.Brands
const joins = iconGroups.joins

interface IconGalleryProps {
  items: string[]; // Cambiado a string[] para aceptar un arreglo de cadenas
}

const ReusableIconGallery: React.FC<IconGalleryProps> = ({ items }) => {
  return (
    <IconGallery>
      {items.map((item) => (
        <IconItem name={item} key={item}> {/* Usar item directamente como clave y nombre */}
          <CaralIcon name={item as Icons} />
        </IconItem>
      ))}
    </IconGallery>
  );
};

export default ReusableIconGallery;


export const Tech: React.FC = () => {
  return <ReusableIconGallery items={nombres} />;
};

export const Transport: React.FC = () => {
  return <ReusableIconGallery items={movilidad} />;
};


export const Financial: React.FC = () => {
  return <ReusableIconGallery items={financial} />;
};


export const Building: React.FC = () => {
  return <ReusableIconGallery items={Buildings} />;
};


export const Peoples: React.FC = () => {
  return <ReusableIconGallery items={People} />;
};



export const Healthi: React.FC = () => {
  return <ReusableIconGallery items={Health} />;
};

export const Contacto: React.FC = () => {
  return <ReusableIconGallery items={Contact} />;
};



export const Natur: React.FC = () => {
  return <ReusableIconGallery items={Nature} />;
};

export const Bussines: React.FC = () => {
  return <ReusableIconGallery items={Bussiness} />;
};


export const Innova: React.FC = () => {
  return <ReusableIconGallery items={innovation} />;
};

export const Recover: React.FC = () => {
  return <ReusableIconGallery items={Recovery} />;
};



export const Sale: React.FC = () => {
  return <ReusableIconGallery items={Sales} />;
};

export const Other: React.FC = () => {
  return <ReusableIconGallery items={Others} />;
};


export const Arrow: React.FC = () => {
  return <ReusableIconGallery items={Arrows} />;
};

export const Brand: React.FC = () => {
  return <ReusableIconGallery items={Brands} />;
};



export const IconGalleryComponent: React.FC = () => {
  return <ReusableIconGallery items={joins} />;
};
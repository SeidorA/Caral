import React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { CaralIcon, Icons } from 'iconcaral2';

const nombres: Partial<Icons>[] = ['menu', 'dots', 'list', 'pause', 'x', 'arrowDownToLine', "arrowUpToLine", 'bluetooth', "bluetoothSlash",
  'bolt', 'boltSlash', 'camera', 'cameraSecurity', 'cameraSecurityRoof', 'charBarScreen', 'charScreen', 'chartFile', 'chartSimple', 'circles', 'clickCheck', 'clickCursor', 'clickTab', 'cloud', 'cloudFly', 'cloudSync', 'cloudUp', 'code', 'command', 'comments', 'commentsServer', 'cube', 'dron', 'fileDown', 'fileZip', 'gear', 'image', 'job',
  'laptop', 'magic', 'mapBranch', 'mensagePc', 'mobile', 'mouseCalendar', 'network', 'pc', 'qr', 'robot', 'satellite', 'shakePhone',
  'shieldHalved', 'sliderHorizontal', 'sliderVertical', "sms", 'squareFace', 'storage', 'sunBright', 'sunMoon', 'tab', 'toggleOff', 'toggleOn', 'upRightFromSquare', 'video', 'volume', 'wifi', 'wifiLeft', 'wrench', 'wrenchPrice', 'database', 'folder'
  , 'play', 'plus', 'less'
]
const movilidad: Partial<Icons>[] = ['airplane', 'anchor', 'bus', 'car', 'dispenser', 'flag', 'globe', 'globeMap', 'helicopter', 'locationPin', 'map', 'moto', 'motorcycle', 'oilWell', 'plane', 'planeArrival', 'planeDeparture', 'scraper', 'signsPost', 'skateboard', 'skateboardElectric', 'trailer', 'train', 'truck', 'truckMedical']
const financial: Partial<Icons>[] = ['calendaEuro', 'creditCard', 'dolar', 'dolarReceipt', 'dolarScreen', 'dollarTower', 'euro', 'lock', 'lockOpen', 'moneyBill', 'moneySlash', 'moneyBills', 'percent', 'percentCircle', 'piggyBank', 'receipt', 'bank', 'calculator']
const Buildings: Partial<Icons>[] = ['building', 'city', 'hospital', 'house', 'key', 'shop', 'store', 'window']
const People: Partial<Icons>[] = ['accessible', 'assist', 'dislike', 'dislikeFile', 'female', 'like', 'likeFile', 'male', 'peopleDress', 'personCopy', 'search', 'searchPerson', 'star', 'user', 'userConfig', 'users', 'usersMap', 'usersWifi']
const Health: Partial<Icons>[] = ['healtFile', 'stethoscope', 'virus', 'wave', 'waveScreen']
const Contact: Partial<Icons>[] = ['circleInfo', 'envelope', 'envelopeOpen', 'envelopeSend', 'infoFile', 'message', 'messagePhone', 'triangleExclamation', 'xCircle']
const Nature: Partial<Icons>[] = ['leaf', 'leafPlant', 'seedlingPot', 'seedlingBottle', 'seedlingPot', 'wheat']
const Bussiness: Partial<Icons>[] = ['arrowPointer', 'box', 'businessTime', 'checkFile', 'checkSearch', 'cubeInCube', 'dropBox', 'editFile', 'editScreen', 'file', 'flagPointer', 'presentationScreenBar', 'presentationScreenChart', 'print', 'refreshPresentation', 'screenBar', 'screenChart']
const innovation: Partial<Icons>[] = ['badgeArrowUp', 'badgeSync', 'bars', 'chats', 'circleBars', 'cupeUpView', 'dateCheck', 'downStairs', 'fileClick', 'fileShare', 'historyChart', 'ligthOn', 'puzzle', 'puzzleOut', 'schedule', 'screenView', 'upStairs']
const Recovery: Partial<Icons>[] = ['lockSlash', 'lockSquare', 'lockSync', 'sync']
const Sales: Partial<Icons>[] = ['cartShopping', 'cartShoppingCircle', 'cartShoppingPin', 'cartShoppingPlus', 'cartShoppingSlash']
const Others: Partial<Icons>[] = ['barbell', 'basketShopping', 'bell', 'book', 'bookmark', 'calendar', 'calendarTime', 'certificate', 'check', 'checkBox', 'checkList', 'clock', 'coffee', 'edit', 'eye', 'eyeSlash', 'filter', 'iD', 'learn', 'megaphone', 'mesagge', 'newFile', 'newspaper', 'noFound', 'note', 'pin', 'portafolio', 'price', 'price1', 'quote', 'save', 'scaleBalanced', 'signature', 'trash', 'zoomIn', 'zoomOut', 'continueExecution', 'cancelExecution']
const Arrows: Partial<Icons>[] = ['arrowDown', 'arrowLeft', 'arrowRight', 'arrowUp', 'arrowUpArrowDown', 'arrowsLeftRight', 'arrowsLeftRightToLine', 'arrowsMaximize', 'arrowsMinimize', 'arrowsMove', 'arrowsUpDown', 'chevronDown', 'chevronDownBox', 'chevronDownCircle', 'chevronLeft', 'chevronLeftBox', 'chevronLeftCircle', 'chevronRigth', 'chevronRigthBox', 'chevronRigthCircle', 'chevronUp', 'chevronUpBox', 'chevronUpCircle', 'chevronsDown', 'chevronsLeft', 'chevronsRigth', 'chevronsUp']
const Brands: Partial<Icons>[] = ["AzureSql", "redshift", "Azure", "cloudStorage", "GoogleStorage", "oracle", "Saleforce", "Snowflake", "AWS", "SAP", "Teradata", "Cloudera", "Google", "Databricks", "OData"]
const joins: Partial<Icons>[] = ['fullJoin', 'fullJoinW', 'innerJoin', 'leftJoin', 'leftJoinW', 'rigthJoin', 'rigthJoinW']

interface IconGalleryProps {
  items: Partial<Icons>[];
}

const ReusableIconGallery: React.FC<IconGalleryProps> = ({ items }) => {
  return (
    <IconGallery>
      {items.map((item) => (
        <IconItem name={item} key={item}>
          <CaralIcon name={item} />
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
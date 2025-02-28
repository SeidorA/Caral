import React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { CaralIcon } from 'iconcaral2';

const nombres = ['menu','dots','list','pause','x','arrowDownToLine',"arrowUpToLine",'bluetooth',"bluetoothSlash", 
  'Bolt','BoltSlash','Camera','CameraSecurity','cameraSecurityRoof','CharBarScreen','CharScreen','ChartFile','chartSimple','Circles','ClickCheck','ClickCursor','ClickTab','Cloud','CloudFly','CloudSync','CloudUp','Code','command','comments', 'commentsServer', 'Cube','Dron','FileDown','FileZip', 'Gear', 'Image', 'Job',
  'Laptop', 'Magic','MapBranch','MensagePc', 'Mobile', 'MouseCalendar', 'Network' , 'PC', 'QR', 'Robot', 'Satellite','ShakePhone',
  'ShieldHalved', 'SliderHorizontal', 'SliderVertical', "SMS", 'SquareFace','Storage','SunBright','SunMoon','Tab','ToggleOff', 'ToggleOn','UpRightFromSquare','Video','Volume', 'Wifi','WifiLeft','Wrench','wrenchPrice', 'Database','Folder'
  ,'Play', 'Plus', 'Less' 
]
const movilidad = ['Airplane','Anchor','Bus','Car','Dispenser','Flag','Globe','GlobeMap','Helicopter','LocationPin','Map','Moto','Motorcycle','OilWell','Plane','PlaneArrival','PlaneDeparture','Scraper','SignsPost','Skateboard','SkateboardElectric','Trailer','Train','Truck','TruckMedical']
const financial =[ "CalendaEuro","CreditCard","Dolar","DolarReceipt","DolarScreen","DollarTower","Euro","lock","lockOpen","MoneyBill","MoneySlash","moneyBills","Percent","PercentCircle","PiggyBank","Receipt","Bank","Calculator" ]
const Buildings = ["building","City","hospital","house","key","shop","store","window"]
const People = ["Accessible","Assist","Dislike","DislikeFile","Female","Like","LikeFile","Male","PeopleDress","PersonCopy","Search","SearchPerson","Star","User","UserConfig","users","usersMap","usersWifi"]
const Health = ["healtFile","Stethoscope","Virus","Wave","WaveScreen"]
const Contact = ["CircleInfo","Envelope","EnvelopeOpen","EnvelopeSend","InfoFile","Message","MessagePhone","TriangleExclamation","XCircle"]
const Nature = ["Leaf","LeafPlant","Seedling","SeedlingBottle","SeedlingPot","wheat"]
const Bussiness =["ArrowPointer","Box","BusinessTime","CheckFile","CheckSearch","CubeInCube","DropBox","EditFile","EditScreen","File","FlagPointer","PresentationScreenBar","PresentationScreenChart","Print","RefreshPresentation","screenBar","screenChart"]
const innovation = ["BadgeArrowUp","BadgeSync","Bars","Chats","CircleBars","CupeUpView","DateCheck","DownStairs","FileClick","FileShare","HistoryChart","LigthOn","Puzzle","PuzzleOut","Schedule","ScreenView","UpStairs"]
const Recovery = ["LockSlash","LockSquare","LockSync","Sync"]
const Sales = ["CartShopping","CartShoppingCircle","CartShoppingPin","CartShoppingPlus","CartShoppingSlash"]
const Others = ["Barbell","BasketShopping","Bell","Book","Bookmark","Calendar","CalendarTime","Certificate","Check","CheckBox","CheckList","Clock","Coffee","Edit","eye","eyeSlash","Filter","ID","Learn","Megaphone","Mesagge","NewFile","Newspaper","noFound","Note","Pin","Portafolio","Price","Price1","Quote","Save","ScaleBalanced","Signature","Trash","zoomIn","ZoomOut", "ContinueExecution", "CancelExecution"]
const Arrows = ["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","ArrowUpArrowDown","ArrowsLeftRight","ArrowsLeftRightToLine","ArrowsMaximize","ArrowsMinimize","ArrowsMove","ArrowsUpDown","ChevronDown","ChevronDownBox","ChevronDownCircle","ChevronLeft","ChevronLeftBox","ChevronLeftCircle","ChevronRigth","ChevronRigthBox","ChevronRigthCircle","ChevronUp","ChevronUpBox","ChevronUpCircle","ChevronsDown","ChevronsLeft","ChevronsRigth","ChevronsUp"]
const Brands = ["AzureSql","Redshift","Azure","CloudStorage","GoogleStorage","Oracle","Saleforce","snowflake","AWS","SAP","Teradata","Cloudera","Google", "Databricks", "OData"]
const joins = ["FullJoin","FullJoinW","InnerJoin","LeftJoin","LeftJoinW","RigthJoin","RigthJoinW", ]

interface IconGalleryProps {
  items: string[];
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
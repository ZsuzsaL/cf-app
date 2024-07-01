export type FarmInfoData = {
  farmid: number;
  uniquecffarmid: string;
  farmname: string;
  farmmanagerfirstname: string;
  farmmanagerlastname: string;
  landownerfirstname: string;
  landownerlastname: string;
  relationshipmanagerorowner: string;
  email: string;
  farmsize: string;
  address: string;
  postalcode: string;
  farmcoordinatesnorth: string;
  farmcoordinateseast: string | null;
  country: string;
  telephone: string;
  creationdate: string | null;
};
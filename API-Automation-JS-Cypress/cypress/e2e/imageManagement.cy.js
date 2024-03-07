/// <reference types='Cypress'/>

import {
  uploadImage,
  uploadWrongFormatImageTypeTest,
} from "../support/pageobject/imageManagement";
import {
  HeroImage,
  Jpeg,
  LogoAsset,
  Png,
  Png1x,
  Png2x,
  Png3x,
  Product,
  Svg,
  TileIcon,
} from "./commonUtils/commonVariables";
 const imagFilePathPng90x90 = "./cypress/fixtures/Images/PNG90x90.png";
 const imagFilePathPng180x180 =
  "./cypress/fixtures/Images/PNG180x180.png";
 const imagFilePathPng270x270 =
  "./cypress/fixtures/Images/PNG270x270.png";
 const imagFilePathPng600x600 =
  "./cypress/fixtures/Images/PNG600x600.png";
 const imagFilePathSvg200x200 =
  "./cypress/fixtures/Images/SVG200x200.svg";
 const imagFilePathSvg250x150 =
  "./cypress/fixtures/Images/SVG250x150.svg";
 const imagFilePathSvg250x250 =
  "./cypress/fixtures/Images/SVG250x250.svg";
 const imagFilePathJpeg1600x490 =
  "./cypress/fixtures/Images/JPEG1600x490.jpeg";
const productPng1x= "CorrectRequestBodyData/productPng1x";
const productPng2x="CorrectRequestBodyData/productPng2x";
const productPng3x="CorrectRequestBodyData/productPng3x";
const productPng="CorrectRequestBodyData/productPng";
const tileIconSvg="CorrectRequestBodyData/tileIconSvg";
const logoAssetSvg="CorrectRequestBodyData/logoAssetSvg";
const heroImageJpeg="CorrectRequestBodyData/heroImageJpeg";
const responsePng90x90="ResponseBodyData/productPng90x90";
const responsePng180x180="ResponseBodyData/productPng180x180";
const responsePng270x270="ResponseBodyData/productPng270x270";
const responsePng600x600="ResponseBodyData/productPng600x600";
const responseSvg200x200="ResponseBodyData/tileIconSvg200x200";
const responseSvg250x150="ResponseBodyData/logoAssetSvg250x150";
const responseSvg250x250="ResponseBodyData/logoAssetSvg250x250";
const responseJpeg1600x490="ResponseBodyData/heroImageJpeg1600x490";

//Test suite for uploading images

describe("Image Upload Tests", () => {
  // ************************************************  Test cases for successful image uploads *****************************************************
  it("Uploads a png 90X90 image for product ", () => {
    uploadImage(imagFilePathPng90x90,productPng1x,responsePng90x90);
  });
  it("Uploads a png 180x180 image for product ", () => {
    uploadImage(imagFilePathPng180x180,productPng2x,responsePng180x180);
  });
  it("Uploads a png 270x270 image for product ", () => {
    uploadImage(imagFilePathPng270x270,productPng3x,responsePng270x270);
  });
  it("Uploads a png 600x600 image for product ", () => {
    uploadImage(imagFilePathPng600x600,productPng,responsePng600x600);
  });
  it("Uploads a svg 200x200 image for tileIcon ", () => {
    uploadImage(imagFilePathSvg200x200,tileIconSvg,responseSvg200x200);
  });
  it("Uploads a svg 250x150 image for logoAsset ", () => {
    uploadImage(imagFilePathSvg250x150,logoAssetSvg,responseSvg250x150);
  });
  it("Uploads a svg 250x250 image for logoAsset ", () => {
    uploadImage(imagFilePathSvg250x250,logoAssetSvg,responseSvg250x150);
  });
  it("Uploads a jpeg 1600x490 image for heroImage ", () => {
    uploadImage(imagFilePathJpeg1600x490,heroImageJpeg,responseJpeg1600x490);
  });

  // *************************************************************  Negative Scenario *****************************************************

  it("Fails  to upload jpeg for product", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, Product, Jpeg);
  });

  it("Fails  to upload Svg for product", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, Product, Svg);
  });
  it("Fails  to upload Png for TileIcon", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, TileIcon, Png);
  });
  it("Fails  to upload Png1x for TileIcon", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, TileIcon, Png1x);
  });
  it("Fails  to upload Png2x for TileIcon", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, TileIcon, Png2x);
  });
  it("Fails  to upload Png3x for TileIcon", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, TileIcon, Png3x);
  });
  it("Fails  to upload jpeg for TileIcon", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, TileIcon, Jpeg);
  });
  it("Fails  to upload Png for Logo asset", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, LogoAsset, Png);
  });
  it("Fails  to upload Png1x for Logo asset", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, LogoAsset, Png1x);
  });
  it("Fails  to upload Png2x for Logo asset", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, LogoAsset, Png2x);
  });
  it("Fails  to upload Png3x for Logo asset", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, LogoAsset, Png3x);
  });
  it("Fails  to upload jpeg for Logo asset", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, LogoAsset, Jpeg);
  });

  it("Fails  to upload Png for HeroImage", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng600x600, HeroImage, Png);
  });

  it("Fails  to upload Png1x for HeroImage", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng90x90, HeroImage, Png1x);
  });
  it("Fails  to upload Png2x for HeroImage", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng180x180, HeroImage, Png2x);
  });
  it("Fails  to upload Png3x for HeroImage", () => {
    uploadWrongFormatImageTypeTest(imagFilePathPng270x270, HeroImage, Png3x);
  });
  it("Fails  to upload Svg for HeroImage", () => {
    uploadWrongFormatImageTypeTest(imagFilePathSvg200x200, HeroImage, Svg);
  });
});
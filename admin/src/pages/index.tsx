import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import CardLarge from "../components/dashboard/CardLarge";
import CardMedium from "../components/dashboard/CardMedium";
import CardSmall from "../components/dashboard/CardSmall";
import Header from "../components/Header";
import Api from "../../service/Api.js";
let CallApi = new Api();

export default function Home() {
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalBanner, setTotalBanner] = useState(0);
  const [totalEventBanner, setTotalEventBanner] = useState(0);
  const [totalBlog, setTotalBlog] = useState(0);
  const [totalVacancy, setTotalVacancy] = useState(0);
  const [totalColor, setTotalColor] = useState(0);
  const [totalSize, setTotalSize] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [totalReview, setTotalReview] = useState(0);
  const [totalPartner, setTotalPartner] = useState(0);
  const [totalService, setTotalService] = useState(0);
  const [totalStandard, setTotalStandard] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const [totalSubscriber, setTotalSubscriber] = useState(0);
  const [totalMail, setTotalMail] = useState(0);

  const fetAllCountData = async () => {
    try {
      let res = await CallApi.fetchData(`getAll/getAllCountData`);
      setTotalProduct(res.productCount);
      setTotalBlog(res.blogCount);
      setTotalVacancy(res.vacancyCount);
      setTotalColor(res.colorCount);
      setTotalSize(res.sizeCount);
      setTotalUser(res.userCount);
      setTotalReview(res.reviewCount);
      setTotalPartner(res.partnerCount);
      setTotalService(res.serviceCount);
      setTotalStandard(res.standardCount);
      setTotalCategory(res.categoryCount);
      setTotalSubscriber(res.subscriberCount);
      setTotalMail(res.mailCount);
      setTotalBanner(res.bannerCount);
      setTotalEventBanner(res.eventBannerCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetAllCountData();
  }, []);

  return (
    <Stack spacing={2}>
      <Header />
      <Stack
        direction="row"
        spacing={2}>
        <CardMedium
          title={"Total Products"}
          item={totalProduct}
        />

        <CardMedium
          title={"Total Banners"}
          item={totalBanner}
        />

        <CardMedium
          title={"Total Blogs"}
          item={totalBlog}
        />

        <CardMedium
          title={"Total Vacancy"}
          item={totalVacancy}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall
          title={"Total Mails"}
          item={totalMail}
        />
        <CardSmall
          title={"Total Subscribers"}
          item={totalSubscriber}
        />
        <CardSmall
          title={"Total EventBanner"}
          item={totalEventBanner}
        />
        <CardSmall
          title={"Total Review"}
          item={totalReview}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall
          title={"Total Standard"}
          item={totalStandard}
        />
        <CardSmall
          title={"Total Service"}
          item={totalService}
        />
        <CardSmall
          title={"Total Size"}
          item={totalSize}
        />
        <CardSmall
          title={"Total  Color"}
          item={totalColor}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall
          title={"Total Category"}
          item={totalCategory}
        />

        <CardSmall
          title={"Total Partner"}
          item={totalPartner}
        />

        <CardSmall
          title={"Total User"}
          item={totalUser}
        />
      </Stack>

      {/* <Stack
        direction="row"
        spacing={2}>
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </Stack> */}
    </Stack>
  );
}

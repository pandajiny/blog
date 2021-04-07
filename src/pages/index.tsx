import { PageComponent } from "@components/page";
import React from "react";

export default function () {
  return (
    <PageComponent pageName="home" title="Welcome">
      <h3>안녕하세요!</h3>
      <p>웹 개발자 김환진의 블로그입니다.</p>
    </PageComponent>
  );
}

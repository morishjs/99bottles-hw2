# 99Bottles HW2

## 개요
- 다양한 결제 시스템을 연동해보는 문제를 해결해봅니다.
  - 대한민국 내 결제 서비스를 제공하는 회사가 NHN, KG이니시스, 다날 등등 여러 개가 있는데 각각 서비스마다 제공하는 서비스 방식이 다릅니다. 그래서 개발자들이 결제 서비스를 추가한다고 하면 매번 새로운 개발 그리고 추가된 결제 수단에 대한 유지보수가 수반됩니다.
  - 이 과제에서 구현하고자 하는 것은 외부 개발자가 하나의 API spec으로 다양한 결제수단을 한번의 개발로 이용할 수 있는 서비스입니다.

## 요구사항
- 현재 이 서비스에서 제공하는 결제수단은 NaverPay, KakaoPay, Toss 입니다.
- 입력값에 따라 위에서 언급된 서비스들 중에 하나를 선택해서 `pay()` 함수를 호출합니다. (`PaymentService#pay` 함수)
  - `OrderRequestDto` 의 `pg` key 에 의해 toss / kakaopay / naverpay 서버에 요청을 보내야 합니다.
    - 요청은 `99bottles-hw2` (가장 상위) 디렉토리에서 `nest start payment-server` 를 호출하면 됩니다.
      - 참조: https://docs.nestjs.com/cli/monorepo
    - `payment-server` 에 POST Method 로 요청을 보내면 되는데, 예를 들어 toss 결제 서버에 요청을 보낸다고 하면 "http://localhost:3001/toss" 주소에 `{purchase_amount: 10000}` 을 넘기면 응답이 돌아옵니다.
  - 각 서비스들의 리턴값은 다르지만 과제에서 구현하는 서버는 통일된 형식을 리턴해야 합니다. (`PaymentResult` 인터페이스 참조)
  - 각 서비스(toss, naverpay, kakaopay)들의 `pay()` 함수에 대한 유닛 테스트를 작성해주세요.
  - `apps/99bottles-hw2`에 존재하는 `*.spec.ts` 형식의 파일에 필요한 테스트 케이스를 작성해주세요.
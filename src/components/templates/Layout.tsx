import styled from "@emotion/styled"
import SubNavBar from "~/components/organisms/SubNavbar"
import * as Images from "~/assets/images"
import FilterSearch from "~/components/molecules/FilterSearch"
import H1 from "~/components/atoms/Typography/H1"

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 250px calc(100vw - 250px);
`

const Wrap = styled.div`
  background-color: #fbfbfb;
`
const Header = styled.header`
  padding: 40px 24px 20px 24px;
`
const Content = styled.main``
const LogoContainer = styled.div`
  background-image: url(${Images.Logo});
  background-size: 100px auto;
  background-position: center center;
  background-repeat: no-repeat;
  margin-top: 30px;
  height: 100px;
`
const Profile = styled.div`
  background-image: url(${Images.Placeholder});
  background-size: 200px auto;
  background-position: center center;
  background-repeat: no-repeat;
  margin-bottom: 30px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "프로필 영역";
  }
`

const Nav = ({ children }: any) => {
  const Container = styled.nav`
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgb(228, 228, 231);
  `
  return <Container>{children}</Container>
}

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Nav>
        <LogoContainer></LogoContainer>
        <div style={{ padding: "0 15px", marginTop: "10px" }}>
          <FilterSearch></FilterSearch>
        </div>
        <SubNavBar></SubNavBar>
        <div style={{ flexGrow: 1 }}></div>
        <Profile></Profile>
      </Nav>
      <Wrap>
        <Header>
          <H1>제목 표시 영역</H1>
        </Header>
        <Content>{children}</Content>
      </Wrap>
    </Container>
  )
}

export default Layout

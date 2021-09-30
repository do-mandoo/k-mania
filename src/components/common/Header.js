import React from 'react';
import styled from 'styled-components';
import { IoMdPower } from 'react-icons/io';
import { HiOutlineUsers } from 'react-icons/hi';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: navy;
  display: flex;
  color: #fff;
  padding: 0 30px;
  justify-content: space-between;
  .logo {
    cursor: pointer;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .right > div {
    margin: 0 10px;
  }
  .loginUsersBtn,
  .powerBtn,
  .searchBtn {
    cursor: pointer;
  }
  .powerBtn {
  }
  .searchInput {
    width: 70px;
    margin-right: 5px;
    border: 0;
    border-bottom: 1px solid #eee;
    background: 0 0;
    height: 13px;
    line-height: 13px;
    padding: 9px 0;
    color: #fff;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>
        <Link to='/' className='logo'>
          MANIA
        </Link>
      </h1>
      <div className='right'>
        {/* <div className='loginUsersBtn'>
          <HiOutlineUsers />
        </div> */}
        <div className='powerBtn'>
          <IoMdPower />
        </div>
        <div className='searchBtn'>
          <input type='search' className='searchInput' />
          <ImSearch />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

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
        <div className='loginUsersBtn'>
          <HiOutlineUsers />
        </div>
        <div className='powerBtn'>
          <IoMdPower />
        </div>
        <div className='searchBtn'>
          <ImSearch />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

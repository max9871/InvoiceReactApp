import React, { useState } from "react";
import Switch from "react-switch";
import Aside from "../../components/Aside";

import Header from "../../components/Header";

export default function EmailNotifications() {
  const [loginAttempted, setLoginAttempted] = useState(true);
  const [addRememberedDevice, setAddRememberedDevice] = useState(true);

  const [bankTransfer, setBankTransfer] = useState(true);
  const [paymentReceived, setPaymentReceived] = useState(true);
  const [paymentSent, setPaymentSent] = useState(true);
  const [chargeRequest, setChargeRequest] = useState(true);

  const [likes, setLikes] = useState(true);
  const [comments, setComments] = useState(true);
  const [mentions, setMentions] = useState(true);
  const [friendRequests, setFriendRequests] = useState(true);
  const [friendJoined, setFriendJoined] = useState(true);

  return (
    <div className="notifications">
      <div className="d-flex desktop-nav-p">
        <Aside />

        <div className="content-area">
          <div className="page-title">Email Notifications</div>
          <div className="friends-social">
            <Header title="Email Notifications" />

            <div className="menu-title">Security</div>

            <ul className="settings-menu">
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Login attempted</div>
                <Switch
                  onChange={setLoginAttempted}
                  checked={loginAttempted}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Add Remembered Device</div>
                <Switch
                  onChange={setAddRememberedDevice}
                  checked={addRememberedDevice}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
            </ul>

            <div className="menu-title">Money</div>

            <ul className="settings-menu">
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Bank Trasfer</div>
                <Switch
                  onChange={setBankTransfer}
                  checked={bankTransfer}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Payment Received</div>
                <Switch
                  onChange={setPaymentReceived}
                  checked={paymentReceived}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Payment Sent</div>
                <Switch
                  onChange={setPaymentSent}
                  checked={paymentSent}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Charge Request Received</div>
                <Switch
                  onChange={setChargeRequest}
                  checked={chargeRequest}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
            </ul>

            <div className="menu-title">Social</div>

            <ul className="settings-menu">
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Likes</div>
                <Switch
                  onChange={setLikes}
                  checked={likes}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Comments</div>
                <Switch
                  onChange={setComments}
                  checked={comments}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Mentions</div>
                <Switch
                  onChange={setMentions}
                  checked={mentions}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Friend Requests</div>
                <Switch
                  onChange={setFriendRequests}
                  checked={friendRequests}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
              <li className="settings-menu-item d-flex align-items-center">
                <div className="flex-fill">Friend Joined</div>
                <Switch
                  onChange={setFriendJoined}
                  checked={friendJoined}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#00D227"
                  width={48}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

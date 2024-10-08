export const pepper = `<?xml version="1.0" ?>
<robot name="pepper">
  <link name="base_link"/>
  <joint name="HeadYaw" type="revolute">
    <parent link="torso"/>
    <child link="Neck"/>
    <origin rpy="0 0 0" xyz="-0.038 0 0.3089"/>
    <axis xyz="0 0 1.0"/>
    <limit effort="5.428" lower="-2.08567" upper="2.08567" velocity="7.33998"/>
  </joint>
  <link name="Neck">
    <inertial>
      <mass value="0.27391"/>
      <inertia ixx="0.000343501" ixy="0" ixz="-1.88563e-05" iyy="0.000493898" iyz="2.09863e-06" izz="0.000215252"/>
      <origin rpy="0 0 0" xyz="-0.00207 0 -0.02636"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/HeadYaw.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
  </link>

  <joint name="HeadPitch" type="revolute">
    <parent link="Neck"/>
    <child link="Head"/>
    <origin rpy="0 0 0" xyz="0 0 0"/>
    <axis xyz="0 1.0 0"/>
    <limit effort="2.666" lower="-0.706858" upper="0.43" velocity="9.22756"/>
  </joint>
  <link name="Head">
    <inertial>
      <mass value="1.51893"/>
      <inertia ixx="0.00597209" ixy="0" ixz="0.000125138" iyy="0.0059054" iyz="4.3428e-07" izz="0.00570374"/>
      <origin rpy="0 0 0" xyz="0.00312 0 0.11152"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/HeadPitch.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>

    <collision>
    <origin rpy="0 0 0" xyz="0 0 0.1"/>
      <geometry>
        <sphere radius = "0.12"/>
      </geometry>
      
    </collision>
    
  </link>
  <joint name="HipRoll" type="revolute">
    <parent link="Hip"/>
    <child link="torso"/>
    <origin rpy="0 0 0" xyz="0 0 0.079"/>
    <axis xyz="-1.0 0 0"/>
    <limit effort="10.1884" lower="-0.514872" upper="0.514872" velocity="2.27032"/>
  </joint>
  <link name="Hip">
    <inertial>
      <mass value="1.02338"/>
      <inertia ixx="0.00502422" ixy="0" ixz="-2.54911e-05" iyy="0.00640971" iyz="0.000159449" izz="0.00441082"/>
      <origin rpy="0 0 0" xyz="0.00032 0 -0.06039"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/HipRoll.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0.079"/>
    </visual>

    <collision>
    <origin rpy="0 0 0" xyz="0 0 0.22"/>
      <geometry>
        <cylinder length = "0.3" radius = "0.17"/>
      </geometry>
      
    </collision>
   
  </link>
  <joint name="HipPitch" type="revolute">
    <parent link="Pelvis"/>
    <child link="Hip"/>
    <origin rpy="0 0 0" xyz="0 0 0.268"/>
    <axis xyz="0 -1.0 0"/>
    <limit effort="19.787" lower="-1.03847" upper="1.03847" velocity="2.93276"/>
  </joint>
  <link name="Pelvis">
    <inertial>
      <mass value="2.45917"/>
      <inertia ixx="0.034351" ixy="0" ixz="0.000223034" iyy="0.0303122" iyz="-8.37542e-05" izz="0.0143771"/>
      <origin rpy="0 0 0" xyz="0.00237 0 -0.09654"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/HipPitch.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0.268"/>
    </visual>

    <collision>
    <origin rpy="0 0 0" xyz="0 0 0.15"/>
      <geometry>
        <cylinder length = "0.35" radius = "0.13"/>
      </geometry>
      
    </collision>
   
  </link>
  <joint name="KneePitch" type="revolute">
    <parent link="Tibia"/>
    <child link="Pelvis"/>
    <origin rpy="0 0 0" xyz="0 0 0"/>
    <axis xyz="0 -1.0 0"/>
    <limit effort="27.702" lower="-0.514872" upper="0.514872" velocity="2.93276"/>
  </joint>
  <link name="Tibia">
    <inertial>
      <mass value="11.6015"/>
      <inertia ixx="0.129229" ixy="-0.000401943" ixz="0.00048556" iyy="0.122839" iyz="-1.01666e-08" izz="0.108168"/>
      <origin rpy="0 0 0" xyz="0.00220451 0 -0.185729"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/KneePitch.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>

     <collision>
    <origin rpy="0 0 0" xyz="0 0 -0.2"/>
      <geometry>
        <cylinder length = "0.27" radius = "0.26"/>
      </geometry>
      
    </collision>
   
  </link>

  <link name="torso">
    <inertial>
      <mass value="3.99533"/>
      <inertia ixx="0.0452761" ixy="0" ixz="0.00499091" iyy="0.0432702" iyz="-0.000266886" izz="0.0258881"/>
      <origin rpy="0 0 0" xyz="0.00322 0 -0.01029"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/Torso.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="2e-05 0 0.139"/>
    </visual>

   
    
  </link>
  <joint name="LShoulderPitch" type="revolute">
    <parent link="torso"/>
    <child link="LShoulder"/>
    <origin rpy="0 0 0" xyz="-0.057 0.14974 0.22582"/>
    <axis xyz="0 1.0 0"/>
    <limit effort="5.428" lower="-2.08567" upper="2.08567" velocity="7.33998"/>
  </joint>
  <link name="LShoulder">
    <inertial>
      <mass value="0.3125"/>
      <inertia ixx="0.000361198" ixy="-1.98347e-06" ixz="6.35907e-07" iyy="0.000137229" iyz="-5.68878e-06" izz="0.000399194"/>
      <origin rpy="0 0 0" xyz="0.00018 -0.01856 0.00099"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LShoulderPitch.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>

   
    
  </link>
  <joint name="LShoulderRoll" type="revolute">
    <parent link="LShoulder"/>
    <child link="LBicep"/>
    <origin rpy="0 0 0" xyz="0 0 0"/>
    <axis xyz="0 0 1.0"/>
    <limit effort="2.666" lower="0.00872665" upper="1.56207" velocity="9.22756"/>
  </joint>
  <link name="LBicep">
    <inertial>
      <mass value="0.50527"/>
      <inertia ixx="0.000500872" ixy="-3.55918e-05" ixz="8.51263e-05" iyy="0.00126284" iyz="9.06813e-06" izz="0.00115718"/>
      <origin rpy="0 0 0" xyz="0.08151 0.01284 -0.01017"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LShoulderRoll.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>

   
   
  </link>
  <joint name="LElbowYaw" type="revolute">
    <parent link="LBicep"/>
    <child link="LElbow"/>
    <origin rpy="0 -0.157079 0" xyz="0.1812 0.015 0.00013"/>
    <axis xyz="1.0 0 0"/>
    <limit effort="5.428" lower="-2.08567" upper="2.08567" velocity="7.33998"/>
  </joint>
  <link name="LElbow">
    <inertial>
      <mass value="0.27495"/>
      <inertia ixx="0.000122971" ixy="9.86024e-07" ixz="-2.55838e-05" iyy="0.000331766" iyz="-1.98925e-06" izz="0.000303047"/>
      <origin rpy="0 0 0" xyz="-0.02297 -0.00019 0.00119"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LElbowYaw.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>

    <collision>
    <origin rpy="0. 0.2 0" xyz="-0.08 00 0.02"/>
      <geometry>
        <box size = "0.1 0.07 0.07"/>
      </geometry>
      
    </collision>
    
    
  </link>
  <joint name="LElbowRoll" type="revolute">
    <parent link="LElbow"/>
    <child link="LForeArm"/>
    <origin rpy="0 0 0" xyz="0 0 0"/>
    <axis xyz="0 0 1.0"/>
    <limit effort="2.666" lower="-1.56207" upper="-0.00872665" velocity="9.22756"/>
  </joint>
  <link name="LForeArm">
    <inertial>
      <mass value="0.16579"/>
      <inertia ixx="0.00156513" ixy="1.47517e-05" ixz="-6.05746e-05" iyy="0.00173219" iyz="-1.7619e-07" izz="0.000273081"/>
      <origin rpy="0 0 0" xyz="0.0593 0.00271 -0.01014"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LElbowRoll.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
    <collision>
    <origin rpy="0 0 0" xyz="0.15 0 0"/>
      <geometry>
        <box size = "0.23 0.07 0.07"/>
      </geometry>
      
    </collision>
  </link>
  <joint name="LWristYaw" type="revolute">
    <parent link="LForeArm"/>
    <child link="l_wrist"/>
    <origin rpy="0 0 0" xyz="0.15 0 0"/>
    <axis xyz="1.0 0 0"/>
    <limit effort="0.2014" lower="-1.82387" upper="1.82387" velocity="17.3835"/>
  </joint>
  <link name="l_wrist">
    <inertial>
      <mass value="0.27555"/>
      <inertia ixx="0.000151643" ixy="1.06629e-05" ixz="2.89509e-06" iyy="0.000431099" iyz="-3.13715e-06" izz="0.000456172"/>
      <origin rpy="0 0 0" xyz="0.03536 -0.00072 -0.00207"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LWristYaw.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LHand" type="revolute">
    <parent link="l_wrist"/>
    <child link="l_gripper"/>
    <origin rpy="0 0 0" xyz="0.025 0 0"/>
    <axis xyz="1.0 0 0"/>
    <limit effort="0.144" lower="0" upper="1" velocity="12.56"/>
  </joint>
  <link name="l_gripper">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
  </link>
  <joint name="RShoulderPitch" type="revolute">
    <parent link="torso"/>
    <child link="RShoulder"/>
    <origin rpy="0 0 0" xyz="-0.057 -0.14974 0.22582"/>
    <axis xyz="0 1.0 0"/>
    <limit effort="5.428" lower="-2.08567" upper="2.08567" velocity="7.33998"/>
  </joint>
  <link name="RShoulder">
    <inertial>
      <mass value="0.3125"/>
      <inertia ixx="0.000361198" ixy="1.98347e-06" ixz="6.35907e-07" iyy="0.000137229" iyz="5.68878e-06" izz="0.000399194"/>
      <origin rpy="0 0 0" xyz="0.00018 0.01856 0.00099"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RShoulderPitch.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RShoulderRoll" type="revolute">
    <parent link="RShoulder"/>
    <child link="RBicep"/>
    <origin rpy="0 0 0" xyz="0 0 0"/>
    <axis xyz="0 0 1.0"/>
    <limit effort="2.666" lower="-1.56207" upper="-0.00872665" velocity="9.22756"/>
  </joint>
  <link name="RBicep">
    <inertial>
      <mass value="0.50527"/>
      <inertia ixx="0.000500872" ixy="3.55918e-05" ixz="8.51263e-05" iyy="0.00126284" iyz="-9.06813e-06" izz="0.00115718"/>
      <origin rpy="0 0 0" xyz="0.08151 -0.01284 -0.01017"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RShoulderRoll.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RElbowYaw" type="revolute">
    <parent link="RBicep"/>
    <child link="RElbow"/>
    <origin rpy="0 -0.157079 0" xyz="0.1812 -0.015 0.00013"/>
    <axis xyz="1.0 0 0"/>
    <limit effort="5.428" lower="-2.08567" upper="2.08567" velocity="7.33998"/>
  </joint>
  <link name="RElbow">
    <inertial>
      <mass value="0.27495"/>
      <inertia ixx="0.000122971" ixy="-9.86024e-07" ixz="-2.55838e-05" iyy="0.000331766" iyz="1.98925e-06" izz="0.000303047"/>
      <origin rpy="0 0 0" xyz="-0.02297 0.00019 0.00119"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RElbowYaw.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>

    <collision>
    <origin rpy="0. 0.2 0" xyz="-0.08 00 0.02"/>
      <geometry>
        <box size = "0.1 0.07 0.07"/>
      </geometry>
      
    </collision>

    
    
  </link>
  <joint name="RElbowRoll" type="revolute">
    <parent link="RElbow"/>
    <child link="RForeArm"/>
    <origin rpy="0 0 0" xyz="0 0 0"/>
    <axis xyz="0 0 1.0"/>
    <limit effort="2.666" lower="0.00872665" upper="1.56207" velocity="9.22756"/>
  </joint>
  <link name="RForeArm">
    <inertial>
      <mass value="0.16579"/>
      <inertia ixx="0.00156513" ixy="-1.47517e-05" ixz="-6.05746e-05" iyy="0.00173219" iyz="1.7619e-07" izz="0.000273081"/>
      <origin rpy="0 0 0" xyz="0.0593 -0.00271 -0.01014"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RElbowRoll.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RWristYaw" type="revolute">
    <parent link="RForeArm"/>
    <child link="r_wrist"/>
    <origin rpy="0 0 0" xyz="0.15 0 0"/>
    <axis xyz="1.0 0 0"/>
    <limit effort="0.2014" lower="-1.82387" upper="1.82387" velocity="17.3835"/>
  </joint>
  <link name="r_wrist">
    <inertial>
      <mass value="0.27555"/>
      <inertia ixx="0.000151643" ixy="-1.06629e-05" ixz="2.89509e-06" iyy="0.000431099" iyz="3.13715e-06" izz="0.000456172"/>
      <origin rpy="0 0 0" xyz="0.03536 0.00072 -0.00207"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RWristYaw.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>

    <collision>
    <origin rpy="0 0 0" xyz="0 0 0"/>
      <geometry>
        <box size = "0.23 0.07 0.07"/>
      </geometry>  
    </collision>
    
  </link>
  <joint name="RHand" type="revolute">
    <parent link="r_wrist"/>
    <child link="r_gripper"/>
    <origin rpy="0 0 0" xyz="0.025 0 0"/>
    <axis xyz="1.0 0 0"/>
    <limit effort="0.144" lower="0" upper="1" velocity="12.56"/>
  </joint>
  <link name="r_gripper">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
  </link>

  <link name="RFinger41_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger41.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger41" type="continuous">
    <parent link="r_wrist"/>
    <child link="RFinger41_link"/>
    <origin rpy="1.74402 1.04064 -0.0683394" xyz="0.074 -0.0309 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger42_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger42.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
    
  </link>
  <joint name="LFinger42" type="continuous">
    <parent link="LFinger41_link"/>
    <child link="LFinger42_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger12_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger12.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger12" type="continuous">
    <parent link="RFinger11_link"/>
    <child link="RFinger12_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger33_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger33.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger33" type="continuous">
    <parent link="LFinger32_link"/>
    <child link="LFinger33_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger31_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger31.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
  
  </link>
  <joint name="RFinger31" type="continuous">
    <parent link="r_wrist"/>
    <child link="RFinger31_link"/>
    <origin rpy="1.67523 1.04483 0.029316" xyz="0.0833 -0.0123 0.004"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger21_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger21.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
  
  </link>
  <joint name="LFinger21" type="continuous">
    <parent link="l_wrist"/>
    <child link="LFinger21_link"/>
    <origin rpy="1.5708 1.0472 -0.061086" xyz="0.0873 -0.0073 0.006"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger32_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger32.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger32" type="continuous">
    <parent link="RFinger31_link"/>
    <child link="RFinger32_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger13_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger13.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
    
  </link>
  <joint name="LFinger13" type="continuous">
    <parent link="LFinger12_link"/>
    <child link="LFinger13_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger32_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger32.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger32" type="continuous">
    <parent link="LFinger31_link"/>
    <child link="LFinger32_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger11_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger11.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger11" type="continuous">
    <parent link="l_wrist"/>
    <child link="LFinger11_link"/>
    <origin rpy="1.74402 1.04064 -0.0334335" xyz="0.0821 -0.0268 0.004"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger22_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger22.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
  
  </link>
  <joint name="RFinger22" type="continuous">
    <parent link="RFinger21_link"/>
    <child link="RFinger22_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger13_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger13.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger13" type="continuous">
    <parent link="RFinger12_link"/>
    <child link="RFinger13_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger22_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger22.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger22" type="continuous">
    <parent link="LFinger21_link"/>
    <child link="LFinger22_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger21_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger21.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger21" type="continuous">
    <parent link="r_wrist"/>
    <child link="RFinger21_link"/>
    <origin rpy="1.5708 1.0472 0.061086" xyz="0.0873 0.0073 0.006"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger41_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger41.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger41" type="continuous">
    <parent link="l_wrist"/>
    <child link="LFinger41_link"/>
    <origin rpy="1.39757 1.04064 0.0683394" xyz="0.074 0.0309 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger12_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger12.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger12" type="continuous">
    <parent link="LFinger11_link"/>
    <child link="LFinger12_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger23_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger23.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger23" type="continuous">
    <parent link="RFinger22_link"/>
    <child link="RFinger23_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger11_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger11.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger11" type="continuous">
    <parent link="r_wrist"/>
    <child link="RFinger11_link"/>
    <origin rpy="1.39757 1.04064 0.0334335" xyz="0.0821 0.0268 0.004"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger23_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger23.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger23" type="continuous">
    <parent link="LFinger22_link"/>
    <child link="LFinger23_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger43_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger43.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger43" type="continuous">
    <parent link="LFinger42_link"/>
    <child link="LFinger43_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger43_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger43.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger43" type="continuous">
    <parent link="RFinger42_link"/>
    <child link="RFinger43_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger42_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger42.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
  
  </link>
  <joint name="RFinger42" type="continuous">
    <parent link="RFinger41_link"/>
    <child link="RFinger42_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LFinger31_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LFinger31.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LFinger31" type="continuous">
    <parent link="l_wrist"/>
    <child link="LFinger31_link"/>
    <origin rpy="1.46636 1.04483 -0.029314" xyz="0.0833 0.0123 0.004"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RFinger33_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RFinger33.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RFinger33" type="continuous">
    <parent link="RFinger32_link"/>
    <child link="RFinger33_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.018 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LThumb1_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LThumb1.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LThumb1" type="continuous">
    <parent link="l_wrist"/>
    <child link="LThumb1_link"/>
    <origin rpy="-1.95836 0.60626 0.533978" xyz="0.0482 -0.0357 -0.0199"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RThumb2_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RThumb2.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
    
  </link>
  <joint name="RThumb2" type="continuous">
    <parent link="RThumb1_link"/>
    <child link="RThumb2_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.022 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="RThumb1_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/RThumb1.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="RThumb1" type="continuous">
    <parent link="r_wrist"/>
    <child link="RThumb1_link"/>
    <origin rpy="-1.18323 0.60626 -0.533978" xyz="0.0482 0.0357 -0.0199"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="RHand" multiplier="0.872665" offset="0"/>
  </joint>
  <link name="LThumb2_link">
    <inertial>
      <mass value="2e-06"/>
      <inertia ixx="1.1e-09" ixy="0" ixz="0" iyy="1.1e-09" iyz="0" izz="1.1e-09"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/LThumb2.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="LThumb2" type="continuous">
    <parent link="LThumb1_link"/>
    <child link="LThumb2_link"/>
    <origin rpy="0 0 -1.0472" xyz="0.022 0 0"/>
    <axis xyz="0 0 1.0"/>
    <mimic joint="LHand" multiplier="0.872665" offset="0"/>
  </joint>

  <link name="WheelFL_link">
    <inertial>
      <mass value="1.58028"/>
      <inertia ixx="0.00299756" ixy="6.3068e-07" ixz="5.56903e-06" iyy="0.00303229" iyz="-9.0408e-07" izz="0.00296585"/>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/WheelFL.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="WheelFL" type="fixed">
    <parent link="Tibia"/>
    <child link="WheelFL_link"/>
    <origin rpy="0 0 1.07517" xyz="0.09 0.155 -0.264"/>
  </joint>
  <link name="WheelB_link">
    <inertial>
      <mass value="1.58028"/>
      <inertia ixx="0.00299756" ixy="6.3068e-07" ixz="5.56903e-06" iyy="0.00303229" iyz="-9.0408e-07" izz="0.00296585"/>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/WheelB.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
    
  </link>
  <joint name="WheelB" type="fixed">
    <parent link="Tibia"/>
    <child link="WheelB_link"/>
    <origin rpy="0 0 -3.14159" xyz="-0.17 0 -0.264"/>
  </joint>
  <link name="WheelFR_link">
    <inertial>
      <mass value="1.58028"/>
      <inertia ixx="0.00299756" ixy="6.3068e-07" ixz="5.56903e-06" iyy="0.00303229" iyz="-9.0408e-07" izz="0.00296585"/>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </inertial>
    <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/WheelFR.dae" scale="0.1 0.1 0.1"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
    </visual>
   
  </link>
  <joint name="WheelFR" type="fixed">
    <parent link="Tibia"/>
    <child link="WheelFR_link"/>
    <origin rpy="0 0 -1.07517" xyz="0.09 -0.155 -0.264"/>
  </joint>

  <joint name="fixed_base" type="fixed">
    <parent link="base_link"/>
    <child link="Tibia"/>
    <origin rpy="0 0 0" xyz="0 0 0.334"/>
  </joint>

  <link name="CameraTop_frame"/>
  <joint name="CameraTop_sensor_fixedjoint" type="fixed">
    <parent link="Head"/>
    <child link="CameraTop_frame"/>
    <origin rpy="0 0 0" xyz="0.08601 0 0.16284"/>
    <axis xyz="0 0 0"/>
  </joint>

  <link name="CameraTop_optical_frame"/>
  <joint name="CameraTop_optical_frame_fixedjoint" type="fixed">
    <parent link="CameraTop_frame"/>
    <child link="CameraTop_optical_frame"/>
    <origin rpy="-1.57079632679 0 -1.57079632679" xyz="0 0 0"/>
  </joint>

  <!-- Where the RealSense is attached wrt CameraTop_frame -->
  <link name="RealSense_screw_frame" >
  <!-- TODO add camera inertial parameters: mass 0.072kg, inertial matrix -->
  <visual>
      <geometry>
        <mesh filename="package://pepper_description/meshes/d435.dae"/>
      </geometry>
      <origin rpy="0 0 0" xyz="0 0 0"/>
  </visual>
  </link>
  <joint name="RealSense_fixedjoint" type="fixed">
    <parent link="CameraTop_frame"/>
    <child link="RealSense_screw_frame"/>
    <origin rpy="0 0 0" xyz="0.0 0.0 0.017"/>
    <axis xyz="0 0 0"/>
  </joint>

  <link name="RealSence_color_frame"/>
  <joint name="RealSense_color_fixedjoint" type="fixed">
      <origin xyz="0 0.0325 0.0125" rpy="0 0 0" />
      <parent link="RealSense_screw_frame" />
      <child link="RealSence_color_frame" />
  </joint>

  <link name="RealSence_color_optical_frame"/>
  <joint name="RealSense_color_optical_frame_fixedjoint" type="fixed">
      <origin xyz="0 0 0" rpy="-1.570796 0 -1.570796" />
      <parent link="RealSence_color_frame" />
      <child link="RealSence_color_optical_frame" />
  </joint>

  <link name="RealSence_depth_frame"/>
  <joint name="RealSense_depth_fixedjoint" type="fixed">
      <origin xyz="0 0.0175 0.0125" rpy="0 0 0" />
      <parent link="RealSense_screw_frame" />
      <child link="RealSence_depth_frame" />
  </joint>

  <link name="RealSence_depth_optical_frame"/>
  <joint name="RealSense_depth_optical_frame_fixedjoint" type="fixed">
      <origin xyz="0 0 0" rpy="-1.570796 0 -1.570796" />
      <parent link="RealSence_depth_frame" />
      <child link="RealSence_depth_optical_frame" />
  </joint>

  <!-- Additional camera -->
  <material name="black">
    <color rgba="0. 0. 0. 1" />
  </material>
  <material name="dark_grey">
    <color rgba="0.1 0.1 0.1 1" />
  </material>
  <material name="grey">
    <color rgba="0.6 0.6 0.6 1" />
  </material>
  <material name="white">
    <color rgba="0.9 0.9 0.9 1" />
  </material>

  <link name="camera_body">
    <visual>
      <origin xyz="0. 0. 0." />
      <geometry>
        <mesh filename="package://pepper_description/meshes/camera_body.stl"/>
      </geometry>
      <material name="white" />
    </visual>
  </link>

  <link name="camera_base">
    <visual>
      <origin xyz="0. 0. 0." />
      <geometry>
        <mesh filename="package://pepper_description/meshes/camera_base.stl"/>
      </geometry>
      <material name="grey" />
    </visual>
  </link>

  <link name="camera_visor">
    <visual>
      <origin xyz="0. 0. 0." />
      <geometry>
        <mesh filename="package://pepper_description/meshes/camera_visor.stl"/>
      </geometry>
      <material name="black" />
    </visual>
  </link>

  <joint name="camera_base_to_body" type="fixed">
    <parent link="camera_base" />
    <child link="camera_body" />
    <origin xyz="-0.0757 0. 0.008" rpy="0. 0. 0." />
  </joint>

  <joint name="camera_base_to_visor" type="fixed">
    <parent link="camera_base" />
    <child link="camera_visor" />
    <origin xyz="0. 0. 0." rpy="0. 0. 0." />
  </joint>

  <!-- Connection to realsense -->
  <joint name="camera_realsense_to_azure" type="fixed">
    <parent link="RealSense_screw_frame" />
    <child link="camera_base" />
    <origin xyz="0.015 0.0005 0.045" rpy="0. 0. 0." />
  </joint>

  <!-- Kinect depth optical frame -->
  <link name="kinect_depth_optical_frame"/>
  <joint name="kinect_depth_fixedjoint" type="fixed">
      <origin xyz="0. 0. 0.0018" rpy="-1.675 0 -1.57" />
      <parent link="camera_base" />
      <child link="kinect_depth_optical_frame" />
  </joint>

  <!-- Kinect IMU sensor frame -->
  <link name="kinect_imu_frame"/>
  <joint name="kinect_imu_fixedjoint" type="fixed">
      <origin xyz="-0.051074 -0.0033404 0.0027" rpy="3.14 0. 3.14" />
      <parent link="camera_base" />
      <child link="kinect_imu_frame" />
  </joint>

  <!-- Connection of T265 to D435 -->
  <link name="t265">
    <visual>
      <origin xyz="0. 0. 0.01225" />
      <geometry>
        <mesh filename="package://pepper_description/meshes/t265.stl"/>
      </geometry>
      <material name="grey" />
    </visual>
  </link>
  <joint name="d435_to_t265" type="fixed">
    <parent link="RealSense_screw_frame" />
    <child link="t265" />
    <origin xyz="0. 0. 0.064" rpy="0. 0. 0." />
  </joint>

  <link name="t265_pose"/>
  <joint name="t265_pose_frame_joint" type="fixed">
      <origin xyz="0.00625 0.0 0.01225" rpy="0.0 0.0 0.0" />
      <parent link="t265" />
      <child link="t265_pose" />
  </joint>

  <link name="tablet"/>
  <joint name="tablet_fixedjoint" type="fixed">
    <parent link="torso"/>
    <child link="tablet"/>
    <origin rpy="0 -0.523599 0" xyz="0.0839249 0 0.2"/>
    <axis xyz="0 0 0"/>
  </joint>

</robot>`

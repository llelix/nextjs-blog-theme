---
title: kubeadm deployment of k8s
description: "kubeadm部署k8s集群1.26+containerd"
date: Oct 24 2025
---



kubeadm部署k8s集群1.26+containerd



### 一、所有节点（master + 2 node）通用环境准备

#### 1. 关闭防火墙、SELinux、Swap



```bash
# 关闭防火墙（CentOS/RHEL 示例，Ubuntu 用 ufw disable）
systemctl stop firewalld && systemctl disable firewalld

# 关闭 SELinux（临时 + 永久）
setenforce 0
sed -i 's/^SELINUX=enforcing$/SELINUX=disabled/' /etc/selinux/config

# 关闭 Swap（临时 + 永久，K8s 要求禁用 Swap）
swapoff -a
sed -i '/swap/s/^/#/' /etc/fstab
```

#### 2. 配置内核参数（开启 IP 转发、网桥过滤）

bash











```bash
# 创建内核配置文件
cat > /etc/sysctl.d/k8s.conf << EOF
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward = 1
EOF

# 加载配置
sysctl --system

# 加载网桥模块（确保生效）
modprobe br_netfilter
lsmod | grep br_netfilter  # 验证模块已加载
```

#### 3. 配置主机名与 hosts 解析（避免 DNS 依赖）

bash











```bash
# master 节点执行（设置主机名）
hostnamectl set-hostname master01

# node01 节点执行
hostnamectl set-hostname node01

# node02 节点执行
hostnamectl set-hostname node02

# 所有节点添加 hosts 解析（确保互相能通过主机名访问）
cat >> /etc/hosts << EOF
192.168.2.13 master01
192.168.2.14 node01
192.168.2.15 node02
EOF
```

#### 4. 安装容器运行时（以 containerd 为例，K8s 推荐）

bash











```bash
# 1. 安装依赖包
yum install -y yum-utils device-mapper-persistent-data lvm2  # CentOS/RHEL
# Ubuntu 用：apt update && apt install -y apt-transport-https ca-certificates curl software-properties-common

# 2. 添加 Docker 源（containerd 属于 Docker 生态，用 Docker 源安装）
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo  # CentOS/RHEL
# Ubuntu 用：curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# 3. 安装 containerd（指定版本，建议与 K8s 版本兼容，这里以 1.6.24 为例）
yum install -y containerd.io-1.6.24  # CentOS/RHEL
# Ubuntu 用：apt update && apt install -y containerd.io=1.6.24-1

# 4. 初始化 containerd 配置
containerd config default > /etc/containerd/config.toml

# 5. 修改配置（关键：设置 sandbox 镜像为国内源，避免拉取超时）
sed -i 's#SystemdCgroup \= false#SystemdCgroup \= true#' /etc/containerd/config.toml  # 启用 Systemd 控制组
sed -i 's#k8s.gcr.io/pause#registry.aliyuncs.com/google_containers/pause#' /etc/containerd/config.toml  # 替换为阿里云镜像

# 6. 重启 containerd 并设置开机启动
systemctl restart containerd && systemctl enable containerd
```

#### 5. 安装 kubeadm、kubelet、kubectl（所有节点）

bash











```bash
# 1. 添加 K8s 源（国内阿里云源，避免官方源访问问题）
cat > /etc/yum.repos.d/kubernetes.repo << EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

# 2. 安装指定版本（以 1.26.0 为例，3 个组件版本需一致）
yum install -y kubeadm-1.26.0 kubelet-1.26.0 kubectl-1.26.0  # CentOS/RHEL
# Ubuntu 用：apt update && apt install -y kubeadm=1.26.0-00 kubelet=1.26.0-00 kubectl=1.26.0-00

# 3. 锁定版本（避免意外升级）
yum mark hold kubeadm kubelet kubectl  # CentOS/RHEL
# Ubuntu 用：apt-mark hold kubeadm kubelet kubectl

# 4. 设置 kubelet 开机启动（暂不启动，master 初始化后自动启动）
systemctl enable kubelet
```

### 二、Master 节点（192.168.2.13）初始化

#### 1. 拉取 K8s 核心镜像（提前拉取，避免初始化超时）

bash











```bash
# 查看 1.26.0 版本需要的镜像
kubeadm config images list --kubernetes-version=1.26.0

# 用阿里云镜像拉取（替换官方镜像源）
kubeadm config images pull \
  --image-repository registry.aliyuncs.com/google_containers \
  --kubernetes-version=1.26.0
```

#### 2. 初始化 Master 节点

bash











```bash
kubeadm init \
  --apiserver-advertise-address=192.168.2.13 \  # Master 节点 IP（必须是本机可访问的 IP）
  --control-plane-endpoint=master01 \  # 控制平面端点（用主机名，后续可扩展 HA）
  --image-repository registry.aliyuncs.com/google_containers \  # 国内镜像源
  --kubernetes-version=1.26.0 \  # K8s 版本
  --pod-network-cidr=10.244.0.0/16 \  # Pod 网段（Flannel 网络默认网段，必须与网络插件一致）
  --service-cidr=10.96.0.0/12  # Service 网段（默认即可）
```

#### 3. 初始化成功后，配置 kubectl 权限（Master 节点执行）

bash











```bash
# 普通用户配置（若用 root，执行下面 3 条命令）
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config

# 验证 Master 状态（出现 "Ready" 表示正常）
kubectl get nodes
# 输出示例：
# NAME       STATUS     ROLES           AGE   VERSION
# master01   NotReady   control-plane   1m    v1.26.0（NotReady 是因为未安装网络插件）
```

#### 4. 安装网络插件（以 Flannel 为例，必须安装，否则 Pod 无法通信）

bash











```bash
# 下载 Flannel 配置文件（国内源）
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/v0.21.0/Documentation/kube-flannel.yml

# 验证网络插件状态（所有 Pod 为 Running 表示正常）
kubectl get pods -n kube-system | grep flannel

# 再次验证 Master 状态（此时应为 Ready）
kubectl get nodes
```

#### 5. 记录 Node 加入集群的命令（Master 初始化成功后会输出，若忘记可重新生成）

bash











```bash
# 生成加入命令（token 有效期 24 小时，过期后需重新生成）
kubeadm token create --print-join-command
# 输出示例（需复制，后续 Node 节点执行）：
# kubeadm join master01:6443 --token abcdef.0123456789abcdef --discovery-token-ca-cert-hash sha256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 三、Node 节点（192.168.2.14、192.168.2.15）加入集群

#### 1. 执行 Master 节点生成的加入命令（两个 Node 节点均执行）

bash











```bash
# 替换为实际生成的命令（示例命令需修改 token 和 hash）
kubeadm join master01:6443 --token abcdef.0123456789abcdef --discovery-token-ca-cert-hash sha256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### 2. 验证集群状态（Master 节点执行）

bash











```bash
# 查看所有节点（3 个节点均为 Ready 表示集群部署成功）
kubectl get nodes
# 输出示例：
# NAME       STATUS   ROLES           AGE   VERSION
# master01   Ready    control-plane   10m   v1.26.0
# node01     Ready    <none>          2m    v1.26.0
# node02     Ready    <none>          1m    v1.26.0

# 查看集群组件状态（所有组件为 Healthy 表示正常）
kubectl get cs
```

### 四、验证集群功能（Master 节点执行）

bash











```bash
# 1. 创建一个测试 Pod（nginx）
kubectl run nginx-test --image=nginx:1.23

# 2. 查看 Pod 状态（Running 表示正常，且 Node 列会显示调度到的节点）
kubectl get pods -o wide

# 3. 暴露 Pod 为 Service（测试网络连通性）
kubectl expose pod nginx-test --port=80 --type=NodePort

# 4. 查看 Service 状态（获取 NodePort 端口，如 30080）
kubectl get svc nginx-test

# 5. 测试访问（从任意节点访问 NodeIP:NodePort，如 192.168.2.14:30080）
curl 192.168.2.14:30080  # 若返回 nginx 欢迎页，说明集群网络正常
```



### 常见问题排查

1. **Node 加入集群失败**：检查 Master 与 Node 之间的网络（6443 端口是否通）、hosts 解析是否正确、containerd 状态是否正常。
2. **Master 节点 NotReady**：检查 flannel 插件是否正常（`kubectl get pods -n kube-system | grep flannel`），若拉取镜像失败，可手动下载镜像并重新打标签。
3. **Pod 调度失败**：检查 Node 是否有污点（`kubectl describe node node01 | grep Taint`），Master 默认有污点（不调度普通 Pod），Node 若有污点需移除（`kubectl taint nodes node01 node-role.kubernetes.io/control-plane:NoSchedule-`）。





containerd配置代理 翻墙

### 方式二：永久配置（systemd 服务注入，推荐）

通过修改 containerd 的 systemd 服务配置，让代理永久生效（重启服务器后仍有效），步骤如下：

#### 1. 创建 containerd 服务的环境变量配置文件

systemd 服务的环境变量可通过 `/etc/systemd/system/containerd.service.d/proxy.conf` 文件注入（此路径为自定义，需手动创建）：

```bash
# 1. 创建配置目录（若不存在）
mkdir -p /etc/systemd/system/containerd.service.d

# 2. 编写代理配置文件（替换为你的代理地址）
cat > /etc/systemd/system/containerd.service.d/proxy.conf << EOF
[Service]
# 代理环境变量（http/https 代理，根据实际情况修改）
Environment="HTTP_PROXY=http://192.168.2.100:1080"
Environment="HTTPS_PROXY=http://192.168.2.100:1080"
# 不代理的地址段（本地、内网地址段，避免内网通信走代理）
Environment="NO_PROXY=localhost,127.0.0.1,192.168.0.0/16,10.0.0.0/8"
EOF
```

#### 2. 重新加载 systemd 配置并重启 containerd

bash











```bash
# 1. 重新加载 systemd 服务配置（识别新的代理配置）
systemctl daemon-reload

# 2. 重启 containerd 服务（应用代理配置）
systemctl restart containerd

# 3. 验证 containerd 是否加载了代理环境变量
# 查看 containerd 进程的环境变量，确认代理是否存在
cat /proc/$(pidof containerd)/environ | tr '\0' '\n' | grep -i proxy
# 正常输出示例：
# HTTP_PROXY=http://192.168.2.100:1080
# HTTPS_PROXY=http://192.168.2.100:1080
# NO_PROXY=localhost,127.0.0.1,192.168.0.0/16,10.0.0.0/8
```



#### 3. 验证代理拉取镜像（关键！）

尝试拉取之前失败的 `registry.k8s.io/pause:3.6` 镜像，确认代理生效







```bash
# 1. 先删除本地可能存在的旧镜像（避免缓存干扰）
ctr -n k8s.io images rm registry.k8s.io/pause:3.6 2>/dev/null

# 2. 用 containerd 拉取官方镜像（此时会通过代理）
crictl --runtime-endpoint unix:///run/containerd/containerd.sock pull registry.k8s.io/pause:3.6

# 3. 若输出 "Successfully pulled image"，说明代理生效
# 查看拉取的镜像
ctr -n k8s.io images list | grep pause:3.6



```

```shell
  #查看运行中的容器
  crictl --runtime-endpoint unix:///run/containerd/containerd.sock ps 
```


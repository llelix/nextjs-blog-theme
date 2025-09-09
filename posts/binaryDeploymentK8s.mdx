---
title: binary deployment of k8s
description: "二进制部署k8s"
date: Oct 24 2025
---

<center><font size=9>基础组件</font></center>

## 搭建

##### 管理

```shell
# 查看组件状态
kubectl get cs

## 清理k8s创建的网络规则
iptables -F && iptables -t nat -F && iptables -t mangle -F && iptables -X
```



##### 故障

```shell
【信息】启用ipvs中的模块时报错:
modprobe: FATAL: Module nf_conntrack_ipv4 not found in directory /lib/modules/4.19.90-52.46.v2207.ky10.x86_64

【过程】
1.  cat > /etc/sysconfig/modules/ipvs.modules <<EOF
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4
EOF
2.  chmod 755 /etc/sysconfig/modules/ipvs.modules && bash /etc/sysconfig/modules/ipvs.modules && lsmod | grep -e ip_vs -e nf_conntrack_ipv4
3.  lsmod | grep -e ipvs -e nf_conntrack_ipv4

【解决】
将`modprobe -- nf_conntrack`替换`modprobe -- nf_conntrack_ipv4`

【原因】
高版本的Linux内核使用 `modprobe -- nf_conntrack`
```









## ETCD

#### 搭建

[OPENSSL]: https://www.cnblogs.com/XY-Heruo/p/17638634.html	"配置分离"
[CFSSL]: https://www.lixueduan.com/posts/etcd/16-prod-deploy/	"配置合并"



##### 下载

```shell
version=v3.5.9
wget https://github.com/etcd-io/etcd/releases/download/"$version"/etcd-"$version"-linux-amd64.tar.gz
tar -zxvf etcd-"$version"-linux-amd64.tar.gz
mv etcd-"$version"-linux-amd64/etcd* /usr/local/bin/  
etcd --version
```



##### 证书

[CFSSl]: https://www.cnblogs.com/hahaha111122222/p/14919655.html

```shell
# 使用cfssl生成证书（官方推荐） 或 openssl生成证书
# 单台节点生成根证书、服务端证书、客户端证书，并将这些证书传输到其他节点 /etc/etcd/ssl
[root@h-c7-01 ~]# tree /etc/etcd/
/etc/etcd/
├── etcd.conf
└── ssl
    ├── ca-key.pem
    ├── ca.pem
    ├── etcd-key.pem
    └── etcd.pem
```



##### 配置

```shell
## /etc/etcd/etcd.conf ##
cat >  /etc/etcd/etcd.conf <<EOF
#[Member]
ETCD_NAME="etcd1"  # 节点名称，集群中唯一
ETCD_DATA_DIR="/data/etcd/etcd-data"  # 数据目录
ETCD_LISTEN_PEER_URLS="https://192.168.198.144:2380"  # 本节点IP,集群通信监听地址
ETCD_LISTEN_CLIENT_URLS="https://192.168.198.144:2379,http://127.0.0.1:2379"  # 本节点IP,客户端监听地址

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.198.144:2380"  # 集群通告地址
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.198.144:2379"  # 客户端通告地址
ETCD_INITIAL_CLUSTER="etcd1=https://192.168.198.144:2380,etcd2=https://192.168.198.145:2380,etcd3=https://192.168.198.146:2380"  # 集群各节点IP
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"  # 集群token
ETCD_INITIAL_CLUSTER_STATE="new"  # 加入集群的当前状态，new是新集群，existing表示加入已有集群
EOF




## /usr/lib/systemd/system/etcd.service ##
cat > /etc/systemd/system/etcd.service <<"EOF"
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
EnvironmentFile=/etc/etcd/etcd.conf
WorkingDirectory=/data/etcd  # 工作目录，可删除
ExecStart=/usr/local/bin/etcd \
  --cert-file=/etc/etcd/ssl/etcd.pem \
  --key-file=/etc/etcd/ssl/etcd-key.pem \
  --trusted-ca-file=/etc/etcd/ssl/ca.pem \
  --peer-cert-file=/etc/etcd/ssl/etcd.pem \
  --peer-key-file=/etc/etcd/ssl/etcd-key.pem \
  --peer-trusted-ca-file=/etc/etcd/ssl/ca.pem \
  --peer-client-cert-auth \
  --client-cert-auth
Restart=on-failure
RestartSec=5
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF
```



##### 启动

```shell
systemctl daemon-reload
systemctl enable --now etcd
systemctl status etcd
```





#### 运维

连接配置

```shell
# 环境变量版
export ETCDCTL_CACERT=/etc/etcd/ssl/ca.crt
export ETCDCTL_CERT=/etc/etcd/ssl/client.crt
export ETCDCTL_KEY=/etc/etcd/ssl/client.key
export ENDPOINTS="https://xx.x.x.1:2379,https://xx.x.x.2:2379,https://xx.x.x.3:2379"
alias etcdv3='ETCDCTL_API=3 etcdctl --endpoints=$ENDPOINTS --cert=$ETCDCTL_CERT --key=$ETCDCTL_KEY --cacert=$ETCDCTL_CACERT'

# 直接设置版
alias etcdv3='ETCDCTL_API=3 etcdctl --cacert=/etc/etcd/ssl/ca.crt --cert=/etc/etcd/ssl/client.crt --key=/etc/etcd/ssl/client.key --endpoints=https://xx.x.x.1:2379,https://xx.x.x.2:2379,https://xx.x.x.3:2379'
或 alias etcdv3='ETCDCTL_API=3 /usr/local/bin/etcdctl --write-out=table --cacert=/etc/etcd/ssl/ca.pem --cert=/etc/etcd/ssl/etcd.pem --key=/etc/etcd/ssl/etcd-key.pem --endpoints=https://xx.x.x.1:2379,https://xx.x.x.2:2379,https://xx.x.x.3:2379'  # 表格输出


# 原: etcdctl --ca-file=/opt/kubernetes/ssl/ca.pem --cert-file=/opt/kubernetes/ssl/etcd.pem --key-file=/opt/kubernetes/ssl/etcd-key.pem  --endpoints=https://xx.x.x.2:2379,xx [命令]
```

| 命令                                                         | 说明                         |
| ------------------------------------------------------------ | ---------------------------- |
| etcdv3  member list                                          | 列出节点                     |
| etcdv3  member remove [etcdID]                               | 移除节点                     |
| etcdv3  member add  etcd-x  --peer-urls=https://xx.xx.x.x:2380 | 加入节点                     |
| etcdv3 endpoint health -w table                              | 查看状态                     |
| etcdv3 snapshot save $(date +%Y%m%d-%H%M).db                 | 全量快照（每小时执行）       |
| etcdv3 check perf                                            | 测压                         |
| etcdctl --insecure-skip-tls-verify=true endpoint status      | 应急临时证书（仅测试环境！） |
|                                                              |                              |









## K8S

[二进制]: https://www.cnblogs.com/xmwan/p/17940137	"博客园"
[保姆级]: https://zhpengfei.com/kubernetes-cluster-installation-guide-with-containerd-and-calico/#aioseo-2-2-5



```shell
├── master
    ├── kube-apiserver
    ├── kube-controller-manager
    ├── kube-scheduler
    └── kubectl
├── work
    ├── kubelet
    ├── kube-proxy
    └── docker + cri-dockerd 或 containerd
└── all
    ├── kubelet
    ├── kube-proxy
    ├── docker + cri-dockerd 或 containerd
    ├── calico
    ├── CoreDNS(随意)
    └── etcd(随意)
```



#### kube-apiserver

```shell
├── ca*.pem
├── kube-apiserver*.pem
├── token.csv
├── kube-apiserver.conf
└── kube-apiserver.service
```



#### kubectl

```shell
├── admin*.pem
└── kube.config
```



#### kube-controller-manager

```shell
├── kube-controller-manager*.pem
├── kube-controller-manager.kubeconfig
├── kube-controller-manager.conf
└── kube-controller-manager.service
```



#### kube-scheduler

```shell
├── kube-scheduler*.pem
├── kube-scheduler.kubeconfig
├── kube-scheduler.conf
└── kube-scheduler.service
```



#### kubelet

```shell
├── kubelet-bootstrap.kubeconfig (master)
├── kubelet.json
├── kubelet.kubeconfig (启动之后会自动生成，同步生成ssl文件)
└── kubelet.service
```



#### kube-proxy

```shell
├── kube-proxy*pem
├── kube-proxy.kubeconfig
├── kube-proxy.yaml
└── kube-proxy.service
```









## 容器

#### containerd

[GitHub]: https://github.com/containerd/containerd/releases	"下载"

```shell
tar xf cri-containerd-cni-*-linux-amd64.tar.gz
mkdir /etc/containerd
containerd config default > /etc/containerd/config.toml
...修改配置...
systemctl daemon-reload
systemctl start containerd
```

```shell
## /etc/containerd/config.toml ##
# 修改数据存储目录
root = "/home/apps/containerd"

# 对于使用systemd作为init system的linux发行版，官方建议用systemd作为容器cgroup driver
# false改成true
SystemdCgroup = true

# 修改pause镜像下载地址，这里用的是内网域名地址
sandbox_image = "registry.atlas.cn/public/pause:3.9"

# 私有harbor的连接信息
[plugins."io.containerd.grpc.v1.cri".registry.configs."registry.atlas.cn"]
[plugins."io.containerd.grpc.v1.cri".registry.configs."registry.atlas.cn".tls]
insecure_skip_verify = true
[plugins."io.containerd.grpc.v1.cri".registry.configs."registry.atlas.cn".auth]
username = "admin"
password = "Harbor2023"
```





#### cri-dockerd

```shell
wget https://github.com/Mirantis/cri-dockerd/releases/download/v0.3.15/cri-dockerd-0.3.15-linux-amd64.tgz
tar -xzvf cri-dockerd-0.3.15-linux-amd64.tgz
sudo cp cri-dockerd/cri-dockerd /usr/local/bin/
...配置...
sudo systemctl daemon-reload
sudo systemctl enable --now cri-dockerd.socket
sudo systemctl enable --now cri-dockerd.service
# 确保kubelet配置正确，使用cri-dockerd作为容器运行时。需要修改kubelet的配置文件或启动参数，指定cri-dockerd   的socket文件路径：--container-runtime-endpoint unix:///var/run/cri-dockerd.sock
```

```shell
## cri-dockerd.service ##
[Unit]
Description=CRI Interface for Docker Application Container Engine
Documentation=https://docs.mirantis.com
After=network-online.target firewalld.service docker.service
Wants=network-online.target
Requires=cri-dockerd.socket

[Service]
Type=notify
ExecStart=/usr/local/bin/cri-dockerd  --pod-infra-container-image=registry.aliyuncs.com/google_containers/pause:3.9 --container-runtime-endpoint fd://
ExecReload=/bin/kill -s HUP $MAINPID
TimeoutSec=0
RestartSec=2
Restart=always
StartLimitBurst=3
StartLimitInterval=60s
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TasksMax=infinity
Delegate=yes
KillMode=process

[Install]
WantedBy=multi-user.target
```

```shell
## cri-dockerd.socket ##
[Unit]
Description=CRI Docker Socket for the API
PartOf=cri-docker.service

[Socket]
ListenStream=/run/cri-dockerd.sock
SocketMode=0660
SocketUser=root
SocketGroup=docker

[Install]
WantedBy=sockets.target
```









## 监控

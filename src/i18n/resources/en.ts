import { LanguageResource } from '../type'

export const en: LanguageResource = {
  header: {
    login: 'Login',
    logout: 'Logout',
    docs: 'Docs',
    networks: 'Networks',
    nodes: 'Nodes',
    accessKeys: 'Access Keys',
    dns: 'DNS',
    externalClients: 'External clients',
    users: 'Users',
  },
  accesskey: {
    accesskeys: "Access Keys",
    accesskey: "Access Key",
    create: "Create an Access Key",
    delete: "Delete Access Key",
    viewing: "Viewing Access Keys for",
    usesremaining: "Uses Remaining",
    none: "No Access Keys Found",
    name: "Name",
    uses: "Uses",
    deleteconfirm: "Are you sure you want to delete this access key?",
    details: 'Viewing your New Access Key Details',
    accessToken: 'Access Token',
    installCommand: 'Agent Install Command',
  },
  breadcrumbs: {
    home: 'Home',
    networks: 'Networks',
    nodes: 'Nodes',
    edit: 'Edit',
    accessKeys: 'Access Keys',
    extClients: 'Ext Clients',
    users: 'Users',
    dns: 'DNS',
    dashboard: 'Dashboard',
    createegress: 'Create Egress',
    createrelay: 'Create Relay',
  },
  common: {
    disabled: 'Disabled',
    notFound: 'Not found',
    server: 'Server',
    version: 'Version',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    submit: 'Submit',
    reset: 'Reset',
    edit: 'Edit',
    create: 'Create',
    accept: 'Accept',
    view: 'View',
    autofill: 'Autofill',
    manage: 'Manage your',
    select: 'Select',
    name: 'Name',
    copy: 'Copy',
  },
  dashboard: {
    title: "Netmaker Dashboard"
  },
  dialog: {
    title: 'Please confirm',
    deleteNetwork: 'Are you sure you want to delete this network?',
    confirm: 'Continue',
    cancel: 'Cancel',
  },
  dns: {
    dns: 'DNS',
    create: 'Create DNS Entry',
    delete: 'Delete DNS Entry',
    viewing: 'Viewing DNS for',
    none: 'No Entries Found',
    entry: 'DNS Entry',
    deleteconfirm: 'Are you sure you want to remove this DNS Entry?',
  },
  error: {
    notfound: 'Not found'
  },
  extclient: {
    extclients: "External Clients",
    extclient: "Ext Client",
    create: "Create Ext Client",
    delete: "Delete Ext Client",
    viewing: "Viewing Ext Client",
    none: "No Ext Clients Found",
    name: "Name",
    deleteconfirm: "Are you sure you want to delete this Ext. Client?"
  },
  network: {
    allowmanualsignup: 'Allow Node Signup Without Keys',
    networks: 'Networks',
    network: 'Network',
    addressrange: 'Address Range (IPv4)',
    addressrange6: 'Address Range (IPv6)',
    localrange: 'Local Range',
    displayname: 'Display Name',
    nodeslastmodified: 'Nodes Last Modified',
    networklastmodified: 'Network Last Modified',
    defaultinterface: 'Default Interface',
    defaultlistenport: 'Default Listen Port',
    defaultpostup: 'Default Postup',
    defaultpostdown: 'Default Postdown',
    defaultkeepalive: 'Default KeepAlive',
    checkininterval: 'Default Checkin Interval',
    defaultextclientdns: 'Default Ext Client DNS',
    defaultmtu: 'Default MTU',
    isdualstack: 'Is Dual Stack (IPv4 + IPv6)',
    defaultsaveconfig: 'Default Saveconfig',
    accesskeys: 'Access Keys',
    defaultudpholepunch: 'UDP Hole Punching',
    islocal: 'Is Local Network',
    create: 'Create Network',
    netid: 'Network Name',
    deleteconfirm: 'Are you sure you want to delete this network?',
  },
  helper: {
    egress: 'Enter your network interface name, i.e. "eth0"',
    egressiface: 'Find your interface on linux with "ip link show"',
  },
  node: {
    nodes: 'Nodes',
    id: 'Id',
    accesskey: 'Access Key',
    lastpeerupdate: 'Last Peer Update',
    keyupdatetimestamp: 'Key Update',
    checkininterval: 'Checkin Interval',
    ispending: 'Is Pending',
    action: 'Action',
    localrange: 'Local Range',
    isingressgateway: 'Is Ingress Gateway',
    isegressgateway: 'Is Egress Gateway',
    isrelay: 'Is a Relay Server',
    pullchanges: 'Pull Changes',
    dnson: 'Is DNS on',
    isdualstack: 'Dualstack (IPv6 Enabled)',
    ipforwarding: 'Ipforwarding',
    roaming: 'Roaming',
    islocal: 'Is Local',
    isserver: 'Is Server',
    ingressgatewayrange: 'Ingress Gateway Ranges (Comma Separated)',
    address: 'IP Address',
    address6: 'IPv6 Address',
    name: 'Node Name',
    listenport: 'Listen Port',
    publickey: 'Publickey',
    endpoint: 'Endpoint',
    expdatetime: 'Node Expiration Date/Time',
    postup: 'Postup ("; " separated)',
    postdown: 'Postdown ("; " separated)',
    persistentkeepalive: 'Persistent Keepalive',
    saveconfig: 'Saveconfig',
    interface: 'Interface',
    lastmodified: 'Last Modified',
    lastcheckin: 'Last Checkin',
    macaddress: 'Mac Address',
    network: 'Network',
    localaddress: 'Local Address',
    egressgatewayranges: 'Egress Gateway Ranges (Comma Separated)',
    allowedips: 'Allowed IPs (Comma Separated)',
    udpholepunch: 'UDP Hole Punching',
    isstatic: 'Is Static',
    mtu: 'MTU',
    relayaddrs: 'Relay Addresses (Comma Separated)',
    os: 'Node Operating System',
    status: 'Status',
    createegress: 'Create Egress Gateway',
    createingress: 'Create Ingress Gateway',
    createrelay: 'Make Relay',
    removeegress: 'Remove Egress Gateway',
    removeingress: 'Remove Ingress Gateway',
    removerelay: 'Remove Relay',
    statusegress: 'Egress Status',
    statusingress: 'Ingress Status',
    statusrelay: 'Relay Status',
    confirmegress: 'Are you sure you want to make an Egress Gateway?',
    confirmingress: 'Are you sure you want to make an Ingress Gateway?',
    confirmrelay: 'Are you sure you want to make a Relay Server?',
    deleteconfirm: 'Are you sure you want to delete this node?',
  },
  login: {
    validation: {
      username:
        'Invalid user name provided. Must be between 3 to 40 alphanumeric characters with "-" or "." or an email address.',
      password:
        'Invalid password provided. Must be between 5 to 64 characters with no white space.',
      confirmation: 'Confirmation password does not match given password.',
    },
    label: {
      username: 'Username',
      password: 'Password',
      confirmation: 'Password Confirmation',
    },
    oauth: {
      login: 'Use OAuth Provider to login.',
    },
    admin: {
      create: 'Create an Admin',
      creating: 'Create Admin',
    },
    header: 'Login below:',
    login: 'Login',
    loginFailed: 'Failed to login, wrong username or password.',
    logout: 'Logout',
  },
  users: {
    header: 'Users',
    create: 'Create User',
    delete: 'Delete User',
    edit: 'Edit User',
    details: 'View User Details',
    networks: {
      create: 'Add a Network to User',
      delete: 'Remove a Network from User',
      edit: 'Edit User Networks',
    },
  },
  toast: {
    pending: 'Request pending',
    update: {
      success: {
        node: 'Node updated successfully!'
      },
      failure: {
        node: 'Node updated failed!'
      }
    },
    create: {
      success: {
        egress: 'Succesfully created Egress Gateway!'
      },
      failure: {
        egress: 'Failed to create Egress Gateway.'
      }
    },
    delete: {
      success: {
        egress: 'Succesfully removed Egress Gateway!'
      },
      failure: {
        egress: 'Failed to remove Egress Gateway.'
      }
    }
  }
}

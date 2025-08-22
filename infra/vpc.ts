export const vpc = new sst.aws.Vpc("my_vpc", {
    bastion: true,
    nat: "ec2",
});
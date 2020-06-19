import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new s3.Bucket(this, 'ReactTest', {
      versioned: true
      websiteIndexDocument: 'index.html', // 1
      blockPublicAccess: new s3.BlockPublicAccess({ restrictPublicBuckets: false }) // 2
    });
  const bucketPolicy = new iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [
          `${bucket.bucketArn}/*`
        ],
        principals: [new iam.Anyone()],
      })
  }
}

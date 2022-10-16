const cut = require('../fileSystemToGraph')

const data = [
  {
    "node": {
      "fileAbsolutePath": "/home/roggia/devs/rroggia.github.io/engineer-diary/AWS/elastic-compute/EC2.md",
      "frontmatter": {
        "title": " EC2 - Elastic Compute"
      },
    }
  },
  {
    "node": {
      "fileAbsolutePath": "/home/roggia/devs/rroggia.github.io/engineer-diary/AWS/aws.md",
      "frontmatter": {
        "title": "AWS"
      },
    }
  },
  {
    "node": {
      "fileAbsolutePath": "/home/roggia/devs/rroggia.github.io/engineer-diary/abc.md",
      "frontmatter": {
        "title": "abc"
      },
    }
  }
]


test("File at first level", () => {
  const data = [
    {
      "node": {
        "fileAbsolutePath": "/home/roggia/devs/rroggia.github.io/engineer-diary/abc.md",
        "frontmatter": {
          "title": "abc.md"
        },
      }
    }
  ]

  const result = cut.fileSystemToGraph(data)

  const expected = {
    "root": "engineer-diary",
    "engineer-diary": {
      isFile: false,
      folders: [],
      files: ["/home/roggia/devs/rroggia.github.io/engineer-diary/abc.md"]
    },
    "/home/roggia/devs/rroggia.github.io/engineer-diary/abc.md": {
      "fileAbsolutePath": "/home/roggia/devs/rroggia.github.io/engineer-diary/abc.md",
      "frontmatter": {
        "title": "abc.md",
      },
      "isFile": true,
      "fileName": "abc.md",
    }
  }
  expect(expected).toEqual(result)
})

test("Create folder/file structure", () => {
  const result = cut.fileSystemToGraph(data)
  const expected = {
    "root": "engineer-diary",
    "engineer-diary": {
      isFile: false,
      folders: ["AWS"],
      files: ["/home/roggia/devs/rroggia.github.io/engineer-diary/abc.md"]
    },
    "AWS": {
      isFile: false,
      folders: ["elastic-compute"],
      files: ["/home/roggia/devs/rroggia.github.io/engineer-diary/AWS/aws.md"]
    },
    "elastic-compute": {
      isFile: false,
      folders: [],
      files: ["/home/roggia/devs/rroggia.github.io/engineer-diary/AWS/elastic-compute/EC2.md"]
    },
    "/home/roggia/devs/rroggia.github.io/engineer-diary/AWS/elastic-compute/EC2.md": {
      "fileAbsolutePath": "/home/roggia/devs/rroggia.github.io/engineer-diary/AWS/elastic-compute/EC2.md",
      "frontmatter": {
        "title": " EC2 - Elastic Compute"
      },
      "isFile": true,
      "fileName": "EC2.md",
    },
    "/home/roggia/devs/rroggia.github.io/engineer-diary/AWS/aws.md": {
      "fileAbsolutePath": "/home/roggia/devs/rroggia.github.io/engineer-diary/AWS/aws.md",
      "frontmatter": {
        "title": "AWS"
      },
      "isFile": true,
      "fileName": "aws.md",
    },
    "/home/roggia/devs/rroggia.github.io/engineer-diary/abc.md": {
      "fileAbsolutePath": "/home/roggia/devs/rroggia.github.io/engineer-diary/abc.md",
      "frontmatter": {
        "title": "abc"
      },
      "isFile": true,
      "fileName": "abc.md",
    }
  }
  console.log(result);
  expect(expected).toEqual(result)
})
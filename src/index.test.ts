import { DFSEO } from ".";
import * as dotenv from "dotenv";
import { expect } from "chai";
import { assert } from "console";
dotenv.config();
const username = process.env.DATAFORSEO_USERNAME || "";
const password = process.env.DATAFORSEO_PASSWORD || "";

const newTask = [
  {
    keyword: "test",
    location_code: 2840,
    language_code: "en"
  }
];

const taskId = "03111954-3683-0066-2000-8e12d6d815d8";

async function dfseoAPICheck(response) {
  try {
    expect(response.status_code).to.equal(20000);
  } catch (e) {
    console.log(e);
    console.log(response);
  }
}

// DFSEO

describe("DFSEO", () => {
  const dfseo = new DFSEO(username, password, true);
  const paidDFSEO = new DFSEO(username, password); //cover branch
  it("should create DFSEO class object", () => {
    assert(dfseo);
    assert(paidDFSEO);
    describe("should be able to handle errors", () => {
      it("should create fetch method", () => {
        assert(dfseo.fetch);
      });
      it("should http error", async () => {
        try {
          await paidDFSEO.fetch({
            url: "thisendpointdoesnotexist",
            method: "GET"
          });
          assert(false);
        } catch (e) {
          assert(true);
        }
      });
      it("should dfseo error", async () => {
        try {
          await dfseo.serpAPI.google.organic.taskPost(null);
          return false;
        } catch (e) {
          return true;
        }
      });
    });
  });

  // DFSEO SERP
  it("should create SERP API", () => {
    assert(dfseo.serpAPI);

    describe("DFSEO SERP", () => {
      it("should create yahoo", () => {
        assert(dfseo.serpAPI.yahoo);
        describe("DFSEO SERP Yahoo", () => {
          it("should be able to create organic", () => {
            assert(dfseo.serpAPI.yahoo.organic);
            describe("DFSEO SERP Yahoo Organic", () => {
              it("should be able to create live", () => {
                assert(dfseo.serpAPI.yahoo.organic.live);
                describe("DFSEO SERP Yahoo Organic Live", () => {
                  it("should be able to get regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.yahoo.organic.live.regular(newTask)
                    );
                  });
                  it("should be able to get html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.yahoo.organic.live.html(newTask)
                    );
                  });
                });
              });
              it("should be able to create task get", () => {
                describe("DFSEO SERP Yahoo Organic Task Get", () => {
                  it("should be able to get regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.yahoo.organic.taskGet.regular(taskId)
                    );
                  });
                  it("should be able to get html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.yahoo.organic.taskGet.html(taskId)
                    );
                  });
                });
              });
              it("should be able to create task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.yahoo.organic.taskPost(newTask)
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.yahoo.organic.tasksReady());
              });
            });
          });
          it("should be able to fetch locations", async () => {
            dfseoAPICheck(await dfseo.serpAPI.yahoo.locations());
          });
          it("should be able to fetch languages", async () => {
            dfseoAPICheck(await dfseo.serpAPI.yahoo.languages());
          });
        });
      });
      it("should create bing", () => {
        assert(dfseo.serpAPI.bing);

        describe("DFSEO SERP Bing", () => {
          it("should be able to fetch locations", async () => {
            dfseoAPICheck(await dfseo.serpAPI.bing.locations());
          });
          it("should be able to fetch locations by country", async () => {
            dfseoAPICheck(await dfseo.serpAPI.bing.locations("UK"));
          });
          it("should be able to fetch languages", async () => {
            dfseoAPICheck(await dfseo.serpAPI.bing.languages());
          });
          it("should be able to create local pack", () => {
            assert(dfseo.serpAPI.bing.localPack);
            describe("DFSEO SERP Bing Local Pack", () => {
              it("should be able to create a task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.bing.localPack.taskPost(newTask)
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.bing.localPack.tasksReady());
              });
              it("should be able to create task get", () => {
                assert(dfseo.serpAPI.bing.localPack.taskGet);
                describe("DFSEO SERP Bing Local Pack Task Get", () => {
                  it("should be able to get regular task", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.bing.localPack.taskGet.regular(taskId)
                    );
                  });
                  it("should be able to get html task", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.bing.localPack.taskGet.html(taskId)
                    );
                  });
                });
              });
              it("should be able to create live", () => {
                assert(dfseo.serpAPI.bing.localPack.live);
                describe("DFSEO SERP Bing Local Pack Live", () => {
                  it("should be able to get live regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.bing.localPack.live.regular(newTask)
                    );
                  });
                  it("should be able to get live html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.bing.localPack.live.html(newTask)
                    );
                  });
                });
              });
            });
          });
          it("should be able to create organic", () => {
            assert(dfseo.serpAPI.bing.organic);
            describe("DFSEO SERP Bing Organic", () => {
              it("should be able to create a task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.bing.organic.taskPost(newTask)
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.bing.organic.tasksReady());
              });
              it("should be able to create task get", () => {
                assert(dfseo.serpAPI.bing.organic.taskGet);
                describe("DFSEO SERP Bing Organic Task Get", () => {
                  it("should be able to get regular task", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.bing.organic.taskGet.regular(taskId)
                    );
                  });
                  it("should be able to get html task", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.bing.organic.taskGet.html(taskId)
                    );
                  });
                });
              });
              it("should be able to create live", () => {
                assert(dfseo.serpAPI.bing.organic.live);
                describe("DFSEO SERP Bing Organic Live", () => {
                  it("should be able to get regular live", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.bing.organic.live.regular(newTask)
                    );
                  });

                  it("should be able to get html live", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.bing.organic.live.html(newTask)
                    );
                  });
                });
              });
            });
          });
        });
      });
      it("should create google", () => {
        assert(dfseo.serpAPI.google);

        // DFSEO SERP Google

        describe("DFSEO SERP Google", () => {
          it("should be able to fetch languages", async () => {
            dfseoAPICheck(await dfseo.serpAPI.google.languages());
          });
          it("should be able to fetch locations", async () => {
            dfseoAPICheck(await dfseo.serpAPI.google.locations());
          });
          it("should be able to get locations by country", async () => {
            dfseoAPICheck(await dfseo.serpAPI.google.locations("UK"));
          });
          it("should create images", () => {
            assert(dfseo.serpAPI.google.images);

            // DFSEO SERP Google Images

            describe("DFSEO SERP Google Images", () => {
              it("should be able to create a new task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.google.images.taskPost(newTask)
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.google.images.tasksReady());
              });

              it("should create live", () => {
                assert(dfseo.serpAPI.google.images.live);
                describe("DFSEO SERP Google Images Live", () => {
                  it("should be able to get live advanced", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.images.live.advanced(newTask)
                    );
                  });
                  it("should be able to get live html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.images.live.html(newTask)
                    );
                  });
                });
              });
              it("should create task get", () => {
                assert(dfseo.serpAPI.google.images.taskGet);
                describe("DFSEO SERP Google Images Task Get", () => {
                  it("should be able to get task get advanced", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.images.taskGet.advanced(taskId)
                    );
                  });

                  it("should be able to get task get html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.images.taskGet.html(taskId)
                    );
                  });
                });
              });
            });
          });
          it("should create maps", () => {
            assert(dfseo.serpAPI.google.maps);

            // DFSEO SERP Google Maps

            describe("DFSEO SERP Google Maps", () => {
              it("should be able to add a new task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.google.maps.taskPost(newTask)
                );
              });
              it("should be able to get tasks ready", async () => {
                dfseoAPICheck(await dfseo.serpAPI.google.maps.tasksReady());
              });
              it("should create live", () => {
                assert(dfseo.serpAPI.google.maps.live);
                // DFSEO SERP Google Maps Live
                describe("DFSEO SERP Google Maps Live", () => {
                  it("should be able to get advanced", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.maps.live.advanced(newTask)
                    );
                  });
                });
              });
              it("should create task get", () => {
                assert(dfseo.serpAPI.google.maps.taskGet);

                // DFSEO SERP Google Maps Task Get
                describe("DFSEO SERP Google Maps Task Get", () => {
                  it("should be able to get advanced", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.maps.taskGet.advanced(taskId)
                    );
                  });
                });
              });
            });
          });
          it("should create news", () => {
            assert(dfseo.serpAPI.google.news);

            // DFSEO SERP Google News

            describe("DFSEO SERP Google News", () => {
              it("should create live", async () => {
                assert(dfseo.serpAPI.google.news.live);

                // DFSEO SERP Google News Live

                describe("DFSEO SERP Google News Live", () => {
                  it("should be able to get live advanced", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.news.live.advanced(newTask)
                    );
                  });

                  it("should be able to get live html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.news.live.html(newTask)
                    );
                  });
                });
              });
              it("should create task get", () => {
                assert(dfseo.serpAPI.google.news.taskGet);

                // DFSEO SERP Google News Task Get

                describe("DFSEO SERP Google Task Get", () => {
                  it("should be able to get task get regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.news.taskGet.advanced(taskId)
                    );
                  });

                  it("should be able to get task get html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.news.taskGet.html(taskId)
                    );
                  });
                });
              });
              it("should be able to make a task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.google.news.taskPost(newTask)
                );
              });

              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.google.news.tasksReady());
              });
            });
          });
          it("should create organic", () => {
            assert(dfseo.serpAPI.google.organic);

            // DFSEO SERP Google Organic
            describe("DFSEO SERP Google Organic", () => {
              it("should be able to make a task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.google.organic.taskPost(newTask)
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.google.organic.taskReady());
              });

              it("should create live", () => {
                assert(dfseo.serpAPI.google.organic.live);

                // DFSEO SERP Google Organic Live

                describe("DFSEO SERP Google Organic Live", () => {
                  it("should be able to get live regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.organic.live.regular(newTask)
                    );
                  });
                  it("should be able to get live advanced", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.organic.live.advanced(newTask)
                    );
                  });
                  it("should be able to get live html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.organic.live.html(newTask)
                    );
                  });
                });
              });
              it("should create task get", () => {
                assert(dfseo.serpAPI.google.organic.taskGet);

                // DFSEO SERP Google Organic Task Get

                describe("DFSEO SERP Google Organic Task Get", () => {
                  it("should be able to get task get regular", async () => {
                    await dfseo.serpAPI.google.organic.taskGet.regular(taskId);
                  });

                  it("should be able to get task get advanced", async () => {
                    await dfseo.serpAPI.google.organic.taskGet.advanced(taskId);
                  });

                  it("should be able to get task html", async () => {
                    await dfseo.serpAPI.google.organic.taskGet.html(taskId);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
// });

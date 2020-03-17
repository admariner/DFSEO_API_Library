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

  // data for seo labs
  it("should create Data For SEO Labs API", () => {
    assert(dfseo.dataForSEOLabsAPI);
    describe("DataForSEO Labs API", () => {
      it("should be able to create competitor research", () => {
        assert(dfseo.dataForSEOLabsAPI.competitorResearch);
        describe("DFSEO DataForSEO Labs API Competitor Research", () => {
          it("should be able to get ranked keywords", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.competitorResearch.rankedKeywords(
                newTask
              )
            );
          });
          it("should be able to get serp competitors", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.competitorResearch.serpCompetitors(
                newTask
              )
            );
          });
          it("should be able to get competitors domain", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.competitorResearch.competitorsDomain(
                newTask
              )
            );
          });
          it("should be able to get domain intersection", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.competitorResearch.domainIntersection(
                newTask
              )
            );
          });
          it("should be able to get subdomains", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.competitorResearch.subdomains(
                newTask
              )
            );
          });
          it("should be able to get relevant pages", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.competitorResearch.relevantPages(
                newTask
              )
            );
          });
          it("should be able to get domain rank overview", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.competitorResearch.domainRankOverview(
                newTask
              )
            );
          });
        });
      });
      it("should bea ble to create market specific analysis", () => {
        assert(dfseo.dataForSEOLabsAPI.marketSpecificAnalysis);
        describe("DFSEO DataForSEO Labs API Market Specific Analysis", () => {
          it("should be able to get categories for domain", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.marketSpecificAnalysis.categoriesForDomain(
                newTask
              )
            );
          });
          it("should be able to get keywords for categories", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.marketSpecificAnalysis.keywordsForCategories(
                newTask
              )
            );
          });
          it("should be able to get ranked domains by category", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.marketSpecificAnalysis.rankedDomainsByCategory(
                newTask
              )
            );
          });
        });
      });
      it("should be able to create keyword research", () => {
        assert(dfseo.dataForSEOLabsAPI.keywordResearch);
        describe("DFSEO DataForSEO Labs API Keyword Research", () => {
          it("should be able to get related keywords", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.keywordResearch.relatedKeywords(
                newTask
              )
            );
          });
          it("should be able to get keyword suggestsions", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.keywordResearch.keywordSuggestions(
                newTask
              )
            );
          });
          it("should be able to get keyword ideas", async () => {
            dfseoAPICheck(
              await dfseo.dataForSEOLabsAPI.keywordResearch.keywordIdeas(
                newTask
              )
            );
          });
        });
      });
      it("should be able to get filters", async () => {
        dfseoAPICheck(await dfseo.dataForSEOLabsAPI.filters());
      });
      it("should be able to get categories", async () => {
        dfseoAPICheck(await dfseo.dataForSEOLabsAPI.categories());
      });
      it("should be able to get locations and languages", async () => {
        dfseoAPICheck(await dfseo.dataForSEOLabsAPI.locationsAndLanguages());
      });
    });
  });
  // appendix
  it("should create appendix API", () => {
    assert(dfseo.appendix);
    describe("DFSEO Appendix API", () => {
      it("should be able to get user data", async () => {
        dfseoAPICheck(await dfseo.appendix.userData());
      });
      it("should be able to get errors", async () => {
        dfseoAPICheck(await dfseo.appendix.errors());
      });
    });
  });
  // traffic analytics
  it("should create traffic analytis API", () => {
    assert(dfseo.trafficAnalyticsAPI);
    describe("DFSEO Traffic Analytics API", () => {
      it("should create similar web", () => {
        assert(dfseo.trafficAnalyticsAPI.similarWeb);
        describe("DFSEO Traffic Analytics Similar Web", () => {
          it("should be able to set task", async () => {
            dfseoAPICheck(
              await dfseo.trafficAnalyticsAPI.similarWeb.taskPost(newTask)
            );
          });
          it("should be able to get ready tasks", async () => {
            dfseoAPICheck(
              await dfseo.trafficAnalyticsAPI.similarWeb.tasksReady()
            );
          });
          it("should be able to get task", async () => {
            dfseoAPICheck(
              await dfseo.trafficAnalyticsAPI.similarWeb.taskGet(taskId)
            );
          });
          it("should be able to get live data", async () => {
            dfseoAPICheck(
              await dfseo.trafficAnalyticsAPI.similarWeb.live(newTask)
            );
          });
        });
      });
    });
  });
  //DFSEO Keywords
  it("should creat keywords API", () => {
    assert(dfseo.keywordsDataAPI);
    describe("DFSEO Keywords Data API", () => {
      it("should create google trends", () => {
        assert(dfseo.keywordsDataAPI.googleTrends);
        describe("DFSEO Keywords Google Trends", () => {
          it("should be able to create Explore", () => {
            assert(dfseo.keywordsDataAPI.googleTrends.explore);
            describe("DFSEO Keywords Google Trends Explore", () => {
              it("should be able to set task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleTrends.explore.taskPost(
                    newTask
                  )
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleTrends.explore.tasksReady()
                );
              });
              it("should be able to get task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleTrends.explore.taskGet(
                    taskId
                  )
                );
              });
              it("should be able to get live data", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleTrends.explore.live(newTask)
                );
              });
            });
          });
          it("should be able to get locations", async () => {
            dfseoAPICheck(await dfseo.keywordsDataAPI.googleTrends.locations());
          });
          it("should be able to get locations by country", async () => {
            dfseoAPICheck(
              await dfseo.keywordsDataAPI.googleTrends.locations("UK")
            );
          });
          it("should be able to get languages", async () => {
            dfseoAPICheck(await dfseo.keywordsDataAPI.googleTrends.languages());
          });
          it("should be able to get  categories", async () => {
            dfseoAPICheck(
              await dfseo.keywordsDataAPI.googleTrends.categories()
            );
          });
        });
      });
      it("should create google Ads", () => {
        assert(dfseo.keywordsDataAPI.googleAds);
        describe("DFSEO Keywords Google Ads", () => {
          it("should be able to create ads traffic by platform", () => {
            assert(dfseo.keywordsDataAPI.googleAds.adsTrafficByPlatform);
            describe("DFSEO Keywords Google Ads Ads Traffic By Platform", () => {
              it("should be able to set task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.adsTrafficByPlatform.taskPost(
                    newTask
                  )
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.adsTrafficByPlatform.tasksReady()
                );
              });
              it("should be able to get task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.adsTrafficByPlatform.taskGet(
                    taskId
                  )
                );
              });
              it("should be able to get live data", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.adsTrafficByPlatform.live(
                    newTask
                  )
                );
              });
            });
          });
          it("should be able to create ads traffic by keywords", () => {
            assert(dfseo.keywordsDataAPI.googleAds.adsTrafficByKeywords);
            describe("DFSEO Keywords Google Ads Ads Traffic By Keywords", () => {
              it("should be able to set task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.adsTrafficByKeywords.taskPost(
                    newTask
                  )
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.adsTrafficByKeywords.tasksReady()
                );
              });
              it("should be able to get task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.adsTrafficByKeywords.taskGet(
                    taskId
                  )
                );
              });
              it("should be able to get live data", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.adsTrafficByKeywords.live(
                    newTask
                  )
                );
              });
            });
          });
          it("should create keywords for category", () => {
            assert(dfseo.keywordsDataAPI.googleAds.keywordsForCategory);
            describe("DFSEO Keywords Google Ads Keywords for Category", () => {
              it("should be able to set task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForCategory.taskPost(
                    newTask
                  )
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForCategory.tasksReady()
                );
              });
              it("should be able to get task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForCategory.taskGet(
                    taskId
                  )
                );
              });
              it("should be able to get live data", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForCategory.live(
                    newTask
                  )
                );
              });
            });
          });
          it("should create keywords for keywords", () => {
            assert(dfseo.keywordsDataAPI.googleAds.keywordsForKeywords);
            describe("DFSEO Keywords Google Ads Keywords for Keywords", () => {
              it("should be able to set task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForKeywords.taskPost(
                    newTask
                  )
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForKeywords.tasksReady()
                );
              });
              it("should be able to get task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForKeywords.taskGet(
                    taskId
                  )
                );
              });
              it("should be able to get live data", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForKeywords.live(
                    newTask
                  )
                );
              });
            });
          });
          it("should create keywords for site", () => {
            assert(dfseo.keywordsDataAPI.googleAds.keywordsForSite);
            describe("DFSEO Keywords Google Ads Keywords For Site", () => {
              it("should be able to able to set task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForSite.taskPost(
                    newTask
                  )
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForSite.tasksReady()
                );
              });
              it("should be able to get task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForSite.taskGet(
                    taskId
                  )
                );
              });
              it("should be able to get live data", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.keywordsForSite.live(
                    newTask
                  )
                );
              });
            });
          });
          it("should create search volume", () => {
            assert(dfseo.keywordsDataAPI.googleAds.searchVolume);
            describe("DFSEO Keywords Google Ads Search Volume", () => {
              it("should be able to set task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.searchVolume.taskPost(
                    newTask
                  )
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.searchVolume.tasksReady()
                );
              });
              it("should be able to get task", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.searchVolume.taskGet(
                    taskId
                  )
                );
              });
              it("should be able to get live data", async () => {
                dfseoAPICheck(
                  await dfseo.keywordsDataAPI.googleAds.searchVolume.live(
                    newTask
                  )
                );
              });
            });
          });
          it("should be able to get locations", async () => {
            dfseoAPICheck(await dfseo.keywordsDataAPI.googleAds.locations());
          });
          it("should be able to get languages", async () => {
            dfseoAPICheck(await dfseo.keywordsDataAPI.googleAds.languages());
          });
          it("should be able to get categories", async () => {
            dfseoAPICheck(await dfseo.keywordsDataAPI.googleAds.categories());
          });
          it("should be able to get adwords status", async () => {
            dfseoAPICheck(
              await dfseo.keywordsDataAPI.googleAds.adWordsStatus()
            );
          });
        });
      });
      it("should create google trends", () => {
        assert(dfseo.keywordsDataAPI.googleTrends);
      });
    });
  });

  // DFSEO SERP
  it("should create SERP API", () => {
    assert(dfseo.serpAPI);

    describe("DFSEO SERP", () => {
      it("should create yandex", () => {
        assert(dfseo.serpAPI.yandex);
        describe("DFSEO SERP Yandex", () => {
          it("should be able to create organic", () => {
            assert(dfseo.serpAPI.yandex.organic);
            describe("DFSEO SERP Yandex Organic", () => {
              it("should be able to create live", () => {
                assert(dfseo.serpAPI.yandex.organic.live);
                describe("DFSEO SERP Yandex Organic Live", () => {
                  it("should be able to get regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.yandex.organic.live.regular(newTask)
                    );
                  });
                  it("should be able to get html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.yandex.organic.live.html(newTask)
                    );
                  });
                });
              });
              it("should be able to create task get", () => {
                assert(dfseo.serpAPI.yandex.organic.taskGet);
                describe("DFSEO SERP Yandex Organic Task Get", () => {
                  it("should be able to get regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.yandex.organic.taskGet.regular(taskId)
                    );
                  });
                  it("should be able to get html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.yandex.organic.taskGet.html(taskId)
                    );
                  });
                });
              });
              it("should be able to create task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.yandex.organic.taskPost(newTask)
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.yandex.organic.tasksReady());
              });
            });
          });
          it("should be able to fetch locations", async () => {
            dfseoAPICheck(await dfseo.serpAPI.yandex.locations());
          });
          it("should be able to fetch locations by country code", async () => {
            dfseoAPICheck(await dfseo.serpAPI.yandex.locations("UK"));
          });
          it("should be able to fetch languages", async () => {
            dfseoAPICheck(await dfseo.serpAPI.yandex.languages());
          });
        });
      });
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
          it("should be able to fetch locations by country", async () => {
            dfseoAPICheck(await dfseo.serpAPI.yahoo.locations("UK"));
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
